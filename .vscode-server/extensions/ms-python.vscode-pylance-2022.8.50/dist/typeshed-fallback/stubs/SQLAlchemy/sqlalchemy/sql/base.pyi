from _typeshed import Self
from collections.abc import MutableMapping
from typing import Any, ClassVar

from .. import util
from ..util import HasMemoized, hybridmethod, memoized_property
from . import roles
from .elements import ColumnElement
from .traversals import (
    HasCacheKey as HasCacheKey,
    HasCopyInternals as HasCopyInternals,
    MemoizedHasCacheKey as MemoizedHasCacheKey,
)
from .visitors import ClauseVisitor

coercions: Any
elements: Any
type_api: Any
PARSE_AUTOCOMMIT: Any
NO_ARG: Any

class Immutable:
    def unique_params(self, *optionaldict, **kwargs) -> None: ...
    def params(self, *optionaldict, **kwargs) -> None: ...

class SingletonConstant(Immutable):
    def __new__(cls, *arg, **kw): ...

class _DialectArgView(MutableMapping[Any, Any]):
    obj: Any
    def __init__(self, obj) -> None: ...
    def __getitem__(self, key): ...
    def __setitem__(self, key, value) -> None: ...
    def __delitem__(self, key) -> None: ...
    def __len__(self): ...
    def __iter__(self): ...

class _DialectArgDict(MutableMapping[Any, Any]):
    def __init__(self) -> None: ...
    def __len__(self): ...
    def __iter__(self): ...
    def __getitem__(self, key): ...
    def __setitem__(self, key, value) -> None: ...
    def __delitem__(self, key) -> None: ...

class DialectKWArgs:
    @classmethod
    def argument_for(cls, dialect_name, argument_name, default) -> None: ...
    @memoized_property
    def dialect_kwargs(self): ...
    @property
    def kwargs(self): ...
    @memoized_property
    def dialect_options(self): ...

class CompileState:
    plugins: Any
    @classmethod
    def create_for_statement(cls, statement, compiler, **kw): ...
    statement: Any
    def __init__(self, statement, compiler, **kw) -> None: ...
    @classmethod
    def get_plugin_class(cls, statement): ...
    @classmethod
    def plugin_for(cls, plugin_name, visit_name): ...

class Generative(HasMemoized): ...
class InPlaceGenerative(HasMemoized): ...
class HasCompileState(Generative): ...

class _MetaOptions(type):
    def __init__(cls, classname, bases, dict_) -> None: ...
    def __add__(self, other): ...

class Options:
    def __init__(self, **kw) -> None: ...
    def __add__(self, other): ...
    def __eq__(self, other): ...
    @classmethod
    def isinstance(cls, klass): ...
    @hybridmethod
    def add_to_element(self, name, value): ...
    @classmethod
    def safe_merge(cls, other): ...
    @classmethod
    def from_execution_options(cls, key, attrs, exec_options, statement_exec_options): ...

class CacheableOptions(Options, HasCacheKey): ...

class ExecutableOption(HasCopyInternals):
    __visit_name__: str

class Executable(roles.StatementRole, Generative):
    supports_execution: bool
    is_select: bool
    is_update: bool
    is_insert: bool
    is_text: bool
    is_delete: bool
    is_dml: bool
    def options(self: Self, *options) -> Self: ...
    def execution_options(self: Self, **kw) -> Self: ...
    def get_execution_options(self): ...
    def execute(self, *multiparams, **params): ...
    def scalar(self, *multiparams, **params): ...
    @property
    def bind(self): ...

class prefix_anon_map(dict[Any, Any]):
    def __missing__(self, key): ...

class SchemaEventTarget: ...

class SchemaVisitor(ClauseVisitor):
    __traverse_options__: Any

class ColumnCollection:
    def __init__(self, columns: Any | None = ...) -> None: ...
    def keys(self): ...
    def values(self): ...
    def items(self): ...
    def __bool__(self): ...
    def __len__(self): ...
    def __iter__(self): ...
    def __getitem__(self, key): ...
    def __getattr__(self, key): ...
    def __contains__(self, key): ...
    def compare(self, other): ...
    def __eq__(self, other): ...
    def get(self, key, default: Any | None = ...): ...
    def __setitem__(self, key, value) -> None: ...
    def __delitem__(self, key) -> None: ...
    def __setattr__(self, key, obj) -> None: ...
    def clear(self) -> None: ...
    def remove(self, column) -> None: ...
    def update(self, iter_) -> None: ...
    __hash__: ClassVar[None]  # type: ignore[assignment]
    def add(self, column, key: Any | None = ...) -> None: ...
    def contains_column(self, col): ...
    def as_immutable(self): ...
    def corresponding_column(self, column, require_embedded: bool = ...): ...

class DedupeColumnCollection(ColumnCollection):
    def add(self, column, key: Any | None = ...) -> None: ...
    def extend(self, iter_) -> None: ...
    def remove(self, column) -> None: ...
    def replace(self, column) -> None: ...

class ImmutableColumnCollection(util.ImmutableContainer, ColumnCollection):
    def __init__(self, collection) -> None: ...
    add: Any
    extend: Any
    remove: Any

class ColumnSet(util.ordered_column_set[ColumnElement[Any]]):
    def contains_column(self, col): ...
    def extend(self, cols) -> None: ...
    def __add__(self, other): ...
    def __eq__(self, other): ...
    def __hash__(self): ...
