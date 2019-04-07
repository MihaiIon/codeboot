// export const filePrepWorkflow = {
//   workflow: {
//     id: "FILE_PREPARATION",
//     url: "file-preparation",
//     isCycleThrough: true,
//     startingModuleId: "PARTY"
//   },
//   modules: [
//     {
//       id: "PARTY",
//       config: {
//         isEnabled: true,
//         url: "party",
//         permissionsByRole: {
//           Clerk: {
//             allowAddParty: true,
//             allowUpdateParty: true,
//             allowDeleteParty: true,
//             partiesMinMaxConfig: [
//               { partyType: "Party1", min: 1, max: 1, code: "Penal" },
//               { partyType: "Party2", min: 1, max: 5, code: "Penal" }
//             ]
//           },
//           "Auto-representatives": {
//             allowAddParty: true,
//             allowUpdateParty: true,
//             allowDeleteParty: true,
//             partiesMinMaxConfig: [
//               { partyType: "Party1", min: 1, max: 1, code: "Penal" },
//               { partyType: "Party2", min: 1, max: 5, code: "Penal" }
//             ]
//           },
//           Neutral: {
//             allowAddParty: false,
//             allowUpdateParty: false,
//             allowDeleteParty: false,
//             partiesMinMaxConfig: [
//               { partyType: "Party1", min: 1, max: 1, code: "Penal" },
//               { partyType: "Party2", min: 1, max: 5, code: "Penal" }
//             ]
//           },
//           Judge: {
//             allowAddParty: true,
//             allowUpdateParty: true,
//             allowDeleteParty: true,
//             partiesMinMaxConfig: [
//               { partyType: "Party1", min: 1, max: 1, code: "Penal" },
//               { partyType: "Party2", min: 1, max: 5, code: "Penal" }
//             ]
//           }
//         },
//         locId: {
//           short: "party.stepper.title_short",
//           long: "party.stepper.title_long"
//         },
//         locDefaultMessage: {
//           short: "Identification",
//           long: "Parties Identification"
//         },
//         moduleSettings: {
//           partyCountMinimum: 2,
//           partyCountMaximum: 8
//         }
//       }
//     },
//     {
//       id: "DOCUMENT",
//       config: {
//         isEnabled: false,
//         url: "document",
//         permissionsByRole: {
//           Clerk: {
//             allowAddDocument: true,
//             allowUpdateDocument: true,
//             allowDeleteDocument: true,
//             allowValidateDocument: false,
//             requireMotionToInstitute: true,
//             allowPublishNewDocumentVersion: true,
//             allowPublishNewMotionToInstituteVersion: true,
//             allowUpdateMotionToInstituteMetadata: true,
//             allowUpdateDocumentMetadata: true
//           },
//           "Auto-representatives": {
//             allowAddDocument: true,
//             allowUpdateDocument: true,
//             allowDeleteDocument: true,
//             allowValidateDocument: false,
//             requireMotionToInstitute: true,
//             allowPublishNewDocumentVersion: true,
//             allowPublishNewMotionToInstituteVersion: true,
//             allowUpdateMotionToInstituteMetadata: true,
//             allowUpdateDocumentMetadata: true
//           },
//           Self_Representative: {
//             allowAddDocument: true,
//             allowUpdateDocument: true,
//             allowDeleteDocument: true,
//             allowValidateDocument: false,
//             requireMotionToInstitute: true,
//             allowPublishNewDocumentVersion: true,
//             allowPublishNewMotionToInstituteVersion: true,
//             allowUpdateMotionToInstituteMetadata: true,
//             allowUpdateDocumentMetadata: true
//           },
//           Neutral: {
//             allowAddDocument: true,
//             allowUpdateDocument: true,
//             allowDeleteDocument: true,
//             allowValidateDocument: false,
//             requireMotionToInstitute: true,
//             allowPublishNewDocumentVersion: true,
//             allowPublishNewMotionToInstituteVersion: true,
//             allowUpdateMotionToInstituteMetadata: true,
//             allowUpdateDocumentMetadata: true
//           },
//           Judge: {
//             allowAddDocument: true,
//             allowUpdateDocument: true,
//             allowDeleteDocument: true,
//             allowValidateDocument: false,
//             requireMotionToInstitute: true,
//             allowPublishNewDocumentVersion: true,
//             allowPublishNewMotionToInstituteVersion: true,
//             allowUpdateMotionToInstituteMetadata: true,
//             allowUpdateDocumentMetadata: true
//           }
//         },
//         locId: {
//           short: "document.stepper.title_short",
//           long: "document.stepper.title_long"
//         },
//         locDefaultMessage: {
//           short: "Documents",
//           long: "Judicial Documents"
//         }
//       }
//     }
//   ],
//   summary: {
//     id: "SUMMARY",
//     config: {
//       isEnabled: false,
//       url: "summary",
//       defaultRolePermissions: {},
//       locId: {
//         short: "summary.stepper.title_short",
//         long: "summary.stepper.title_long"
//       },
//       locDefaultMessage: {
//         short: "Summary",
//         long: "Summary"
//       },

//       permissionsByRole: {
//         Clerk: {},
//         "Auto-representatives": {},
//         Self_Representative: {},
//         Neutral: {},
//         Judge: {}
//       }
//     }
//   }
// };
