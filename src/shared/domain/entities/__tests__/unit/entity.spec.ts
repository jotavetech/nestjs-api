import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {
  it('Should set props and id', () => {
    const props: StubProps = { prop1: 'value1', prop2: 10 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props: StubProps = { prop1: 'value1', prop2: 10 };
    const id = '3496716c-a55a-4864-93cc-962b23c2363e';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity.id)).toBeTruthy();
    expect(entity.id).toBe(id);
  });

  it('Should convert a entity to a JSON', () => {
    const props: StubProps = { prop1: 'value1', prop2: 10 };
    const id = '3496716c-a55a-4864-93cc-962b23c2363e';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
