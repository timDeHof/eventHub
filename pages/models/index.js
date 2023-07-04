// @ts-check
import { initSchema } from "@aws-amplify/datastore";
import { schema } from "./schema";

const { Event, User, UserEvent } = initSchema(schema);

export { Event, User, UserEvent };
