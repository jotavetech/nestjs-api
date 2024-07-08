import { UserEntity, UserProps } from '../../user.entity';

import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let user: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});

    user = new UserEntity(props);
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

  it('Setter of name field', () => {
    user['name'] = 'donjoe';
    expect(user.name).toEqual('donjoe');
    expect(typeof user.name).toBe('string');
  });

  it('Setter of password field', () => {
    user['password'] = 'donjoe';
    expect(user.password).toEqual('donjoe');
    expect(typeof user.password).toBe('string');
  });

  it('should update a user', () => {
    user.updateName('joao vitin');
    user.updatePassword('123');

    expect(user.name).toEqual('joao vitin');
    expect(user.password).toEqual('123');
  });
});
