export const schema = {
  models: {
    Event: {
      name: "Event",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        name: {
          name: "name",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        description: {
          name: "description",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        data: {
          name: "data",
          isArray: false,
          type: "AWSDateTime",
          isRequired: true,
          attributes: [],
        },
        location: {
          name: "location",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        attendees: {
          name: "attendees",
          isArray: true,
          type: {
            model: "User",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["eventID"],
          },
        },
        users: {
          name: "users",
          isArray: true,
          type: {
            model: "UserEvent",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["event"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Events",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    User: {
      name: "User",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        username: {
          name: "username",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        email: {
          name: "email",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        password: {
          name: "password",
          isArray: false,
          type: "String",
          isRequired: true,
          attributes: [],
        },
        eventID: {
          name: "eventID",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        events: {
          name: "events",
          isArray: true,
          type: {
            model: "UserEvent",
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: "HAS_MANY",
            associatedWith: ["user"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "Users",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byEvent",
            fields: ["eventID"],
          },
        },
        {
          type: "auth",
          properties: {
            rules: [
              {
                allow: "public",
                operations: ["create", "update", "delete", "read"],
              },
            ],
          },
        },
      ],
    },
    UserEvent: {
      name: "UserEvent",
      fields: {
        id: {
          name: "id",
          isArray: false,
          type: "ID",
          isRequired: true,
          attributes: [],
        },
        eventId: {
          name: "eventId",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
        userId: {
          name: "userId",
          isArray: false,
          type: "ID",
          isRequired: false,
          attributes: [],
        },
        event: {
          name: "event",
          isArray: false,
          type: {
            model: "Event",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["eventId"],
          },
        },
        user: {
          name: "user",
          isArray: false,
          type: {
            model: "User",
          },
          isRequired: true,
          attributes: [],
          association: {
            connectionType: "BELONGS_TO",
            targetNames: ["userId"],
          },
        },
        createdAt: {
          name: "createdAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: "updatedAt",
          isArray: false,
          type: "AWSDateTime",
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: "UserEvents",
      attributes: [
        {
          type: "model",
          properties: {},
        },
        {
          type: "key",
          properties: {
            name: "byEvent",
            fields: ["eventId"],
          },
        },
        {
          type: "key",
          properties: {
            name: "byUser",
            fields: ["userId"],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  codegenVersion: "3.4.4",
  version: "cfa627853285f25abe334b594bf0825a",
};
