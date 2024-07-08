import { faker } from '@faker-js/faker';

import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let user: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    user = UserEntity.create(props);
  });

  it('Constructor method', () => {
    expect(user.name).toEqual(props.name);
    expect(user.email).toEqual(props.email);
    expect(user.password).toEqual(props.password);
    expect(user.createdAt).toBeInstanceOf(Date);
  });
});
