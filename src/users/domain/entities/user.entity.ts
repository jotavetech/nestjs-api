export interface UserProps {
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
}

// Qualquer informação da entidade só deve ser acessada por métodos da entidade
export class UserEntity {
  constructor(private readonly props: UserProps) {}

  public static create(props: UserProps): UserEntity {
    return new UserEntity({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });
  }

  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  get createdAt(): Date {
    return this.props.createdAt ?? new Date();
  }
}
