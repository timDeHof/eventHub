import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from "@aws-amplify/datastore";
// @ts-ignore
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
  AsyncItem,
} from "@aws-amplify/datastore";

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly data: string;
  readonly location: string;
  readonly attendees?: (User | null)[] | null;
  readonly users?: (UserEvent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly data: string;
  readonly location: string;
  readonly attendees: AsyncCollection<User>;
  readonly users: AsyncCollection<UserEvent>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Event = LazyLoading extends LazyLoadingDisabled
  ? EagerEvent
  : LazyEvent;

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(
    source: Event,
    mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void
  ): Event;
};

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly eventID: string;
  readonly events?: (UserEvent | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly eventID: string;
  readonly events: AsyncCollection<UserEvent>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type User = LazyLoading extends LazyLoadingDisabled
  ? EagerUser
  : LazyUser;

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(
    source: User,
    mutator: (draft: MutableModel<User>) => MutableModel<User> | void
  ): User;
};

type EagerUserEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserEvent, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly userId?: string | null;
  readonly event: Event;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUserEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserEvent, "id">;
    readOnlyFields: "createdAt" | "updatedAt";
  };
  readonly id: string;
  readonly eventId?: string | null;
  readonly userId?: string | null;
  readonly event: AsyncItem<Event>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type UserEvent = LazyLoading extends LazyLoadingDisabled
  ? EagerUserEvent
  : LazyUserEvent;

export declare const UserEvent: (new (
  init: ModelInit<UserEvent>
) => UserEvent) & {
  copyOf(
    source: UserEvent,
    mutator: (draft: MutableModel<UserEvent>) => MutableModel<UserEvent> | void
  ): UserEvent;
};
