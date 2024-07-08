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

  it('Getter of name field', () => {
    expect(user.name).toBeDefined();
    expect(typeof user.name).toBe('string');
  });

  it('Getter of email field', () => {
    expect(user.email).toBeDefined();
    expect(typeof user.email).toBe('string');
  });

  it('Getter of password field', () => {
    expect(user.password).toBeDefined();
    expect(typeof user.password).toBe('string');
  });

  it('Getter of createdAt field', () => {
    expect(user.createdAt).toBeDefined();
    expect(user.createdAt).toBeInstanceOf(Date);
  });
});
