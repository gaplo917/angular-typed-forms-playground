import {
  SimpleTable,
  TypedFormBuilder,
  TypedFormControl,
  TypedNumberFormControl,
} from '@gaplo917/angular-typed-forms'

interface AddressType {
  address1: TypedFormControl<string | null>
  address2: TypedFormControl<string | null>
  address3: TypedFormControl<string | null>
}

export class AddressTable extends SimpleTable<AddressType> {
  constructor(private fb: TypedFormBuilder) {
    super({
      constructRow: () =>
        fb.group({
          address1: fb.control(null),
          address2: fb.control(null),
          address3: fb.control(null),
        }),
      size: 1,
    })
  }
}

interface UserTableType {
  id: TypedFormControl<string | null>
  username: TypedFormControl<string | null>
  birth: TypedFormControl<Date | null>
  isStudent: TypedFormControl<boolean>
  age?: TypedNumberFormControl<number | null>
  addresses: AddressTable
}

export class UserTable extends SimpleTable<UserTableType> {
  constructor(private fb: TypedFormBuilder) {
    super({
      constructRow: (index: number) =>
        fb.group({
          id: fb.control(String(index)),
          username: fb.control(null),
          birth: fb.control(null),
          isStudent: fb.control<boolean>(false),
          addresses: new AddressTable(fb),
        }),
      size: 2,
    })
  }
}
