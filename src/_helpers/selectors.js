// Current file in workflow
export const currentFile = state => state.currentFile;

export const userRepresentativeId = state => state.auth.claims.labcj_representative_id;

// Get party of current user in current file
// todo : doesnt work yet, as representative is not linked to party yet.
export const partyCurrent = state =>
  currentFile(state).data.parties.find(
    p => p.representatives.filter(r => r.id === userRepresentativeId(state)).length > 0
  );

export const currentJudicialEntityName = state => {
  const {
    judicialEntities: { selectedJudicialEntityId, data }
  } = state;
  return data.filter(x => x.judicialEntityId === selectedJudicialEntityId)[0].name;
};

// TODO : Unit test
export const currentBusinessRule = state => {
  const judicialEntityName = currentJudicialEntityName(state);
  return state.businessrules.data.filter(x => x.judicialEntityName === judicialEntityName)[0]
    .businessRule;
};

export const currentMatters = state => {
  const businessRule = currentBusinessRule(state);
  return state.matters.data.filter(x => Object.keys(businessRule).includes(x.code));
};

export const currentRole = state => state.auth.claims.role;
