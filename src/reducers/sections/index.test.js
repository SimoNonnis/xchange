import pocketSelection, {
  SELECT_POCKET,
  SELECT_MOVE_TO,
  RESET_MOVE_TO
} from './pocketSelection';

describe('Test pocketSelection reducer', () => {
  it('should return the state if no valid action', () => {
    expect(pocketSelection(undefined, { type: 'FAKE_ACTION' })).toEqual({
      selected: undefined,
      moveTo: undefined
    });
  });

  it('should set the selected pocket if SELECT_POCKET action', () => {
    expect(
      pocketSelection(
        {
          selected: 'EUR',
          moveTo: undefined
        },
        { type: SELECT_POCKET, code: 'RUB' }
      )
    ).toEqual({
      selected: 'RUB',
      moveTo: undefined
    });
  });

  it('should set the moveTo pocket if SELECT_MOVE_TO action', () => {
    expect(
      pocketSelection(
        {
          selected: undefined,
          moveTo: 'RUB'
        },
        { type: SELECT_MOVE_TO, moveTo: 'EUR' }
      )
    ).toEqual({
      selected: undefined,
      moveTo: 'EUR'
    });
  });

  it('should reset the moveTo pocket if RESET_MOVE_TO action', () => {
    expect(
      pocketSelection(
        {
          selected: 'RUB',
          moveTo: 'EUR'
        },
        { type: RESET_MOVE_TO }
      )
    ).toEqual({
      selected: 'RUB',
      moveTo: undefined
    });
  });
});
