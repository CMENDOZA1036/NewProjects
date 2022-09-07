from typing import Generic, TypeVar

from google.protobuf.descriptor import EnumDescriptor

_V = TypeVar("_V", bound=int)

# Expose a generic version so that those using mypy-protobuf
# can get autogenerated NewType wrapper around the int values
class _EnumTypeWrapper(Generic[_V]):
    DESCRIPTOR: EnumDescriptor
    def __init__(self, enum_type: EnumDescriptor) -> None: ...
    def Name(self, number: _V) -> str: ...
    def Value(self, name: str | bytes) -> _V: ...
    def keys(self) -> list[str]: ...
    def values(self) -> list[_V]: ...
    def items(self) -> list[tuple[str, _V]]: ...

class EnumTypeWrapper(_EnumTypeWrapper[int]): ...
