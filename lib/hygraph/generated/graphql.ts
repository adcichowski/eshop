/* eslint-disable */
import type { DocumentTypeDecoration } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date string, such as 2007-12-03 (YYYY-MM-DD), compliant with ISO 8601 standard for representation of dates using the Gregorian calendar. */
  Date: { input: string; output: string };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the date-timeformat outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representationof dates and times using the Gregorian calendar. */
  DateTime: { input: string; output: string };
  Hex: { input: unknown; output: unknown };
  /** Raw JSON value */
  Json: { input: unknown; output: unknown };
  /** The Long scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: { input: unknown; output: unknown };
  RGBAHue: { input: unknown; output: unknown };
  RGBATransparency: { input: unknown; output: unknown };
  /** Slate-compatible RichText AST */
  RichTextAST: { input: unknown; output: unknown };
};

export type Account = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  discountCode: Array<AccountDiscountCode>;
  /** Get the document in other stages */
  documentInStages: Array<Account>;
  email: Scalars["String"]["output"];
  /** List of Account versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  password: Scalars["String"]["output"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type AccountCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AccountDiscountCodeArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type AccountDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type AccountHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type AccountPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AccountScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type AccountUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type AccountConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AccountWhereUniqueInput;
};

/** A connection to a list of items. */
export type AccountConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AccountEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AccountCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  discountCode?: InputMaybe<AccountDiscountCodeCreateManyInlineInput>;
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type AccountCreateManyInlineInput = {
  /** Connect multiple existing Account documents */
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Create and connect multiple existing Account documents */
  create?: InputMaybe<Array<AccountCreateInput>>;
};

export type AccountCreateOneInlineInput = {
  /** Connect one existing Account document */
  connect?: InputMaybe<AccountWhereUniqueInput>;
  /** Create and connect one Account document */
  create?: InputMaybe<AccountCreateInput>;
};

export type AccountDiscountCode = DiscountCode;

export type AccountDiscountCodeConnectInput = {
  DiscountCode?: InputMaybe<DiscountCodeConnectInput>;
};

export type AccountDiscountCodeCreateInput = {
  DiscountCode?: InputMaybe<DiscountCodeCreateInput>;
};

export type AccountDiscountCodeCreateManyInlineInput = {
  /** Connect multiple existing AccountDiscountCode documents */
  connect?: InputMaybe<Array<AccountDiscountCodeWhereUniqueInput>>;
  /** Create and connect multiple existing AccountDiscountCode documents */
  create?: InputMaybe<Array<AccountDiscountCodeCreateInput>>;
};

export type AccountDiscountCodeCreateOneInlineInput = {
  /** Connect one existing AccountDiscountCode document */
  connect?: InputMaybe<AccountDiscountCodeWhereUniqueInput>;
  /** Create and connect one AccountDiscountCode document */
  create?: InputMaybe<AccountDiscountCodeCreateInput>;
};

export type AccountDiscountCodeUpdateInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpdateInput>;
};

export type AccountDiscountCodeUpdateManyInlineInput = {
  /** Connect multiple existing AccountDiscountCode documents */
  connect?: InputMaybe<Array<AccountDiscountCodeConnectInput>>;
  /** Create and connect multiple AccountDiscountCode documents */
  create?: InputMaybe<Array<AccountDiscountCodeCreateInput>>;
  /** Delete multiple AccountDiscountCode documents */
  delete?: InputMaybe<Array<AccountDiscountCodeWhereUniqueInput>>;
  /** Disconnect multiple AccountDiscountCode documents */
  disconnect?: InputMaybe<Array<AccountDiscountCodeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing AccountDiscountCode documents */
  set?: InputMaybe<Array<AccountDiscountCodeWhereUniqueInput>>;
  /** Update multiple AccountDiscountCode documents */
  update?: InputMaybe<
    Array<AccountDiscountCodeUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple AccountDiscountCode documents */
  upsert?: InputMaybe<
    Array<AccountDiscountCodeUpsertWithNestedWhereUniqueInput>
  >;
};

export type AccountDiscountCodeUpdateManyWithNestedWhereInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpdateManyWithNestedWhereInput>;
};

export type AccountDiscountCodeUpdateOneInlineInput = {
  /** Connect existing AccountDiscountCode document */
  connect?: InputMaybe<AccountDiscountCodeWhereUniqueInput>;
  /** Create and connect one AccountDiscountCode document */
  create?: InputMaybe<AccountDiscountCodeCreateInput>;
  /** Delete currently connected AccountDiscountCode document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected AccountDiscountCode document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single AccountDiscountCode document */
  update?: InputMaybe<AccountDiscountCodeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single AccountDiscountCode document */
  upsert?: InputMaybe<AccountDiscountCodeUpsertWithNestedWhereUniqueInput>;
};

export type AccountDiscountCodeUpdateWithNestedWhereUniqueInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpdateWithNestedWhereUniqueInput>;
};

export type AccountDiscountCodeUpsertWithNestedWhereUniqueInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpsertWithNestedWhereUniqueInput>;
};

export type AccountDiscountCodeWhereInput = {
  DiscountCode?: InputMaybe<DiscountCodeWhereInput>;
};

export type AccountDiscountCodeWhereUniqueInput = {
  DiscountCode?: InputMaybe<DiscountCodeWhereUniqueInput>;
};

/** An edge in a connection. */
export type AccountEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Account;
};

/** Identifies documents */
export type AccountManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccountWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty */
  discountCode_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  discountCode_some?: InputMaybe<AccountDiscountCodeWhereInput>;
  documentInStages_every?: InputMaybe<AccountWhereStageInput>;
  documentInStages_none?: InputMaybe<AccountWhereStageInput>;
  documentInStages_some?: InputMaybe<AccountWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  password_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AccountOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PasswordAsc = "password_ASC",
  PasswordDesc = "password_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type AccountUpdateInput = {
  discountCode?: InputMaybe<AccountDiscountCodeUpdateManyInlineInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type AccountUpdateManyInlineInput = {
  /** Connect multiple existing Account documents */
  connect?: InputMaybe<Array<AccountConnectInput>>;
  /** Create and connect multiple Account documents */
  create?: InputMaybe<Array<AccountCreateInput>>;
  /** Delete multiple Account documents */
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Disconnect multiple Account documents */
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Account documents */
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  /** Update multiple Account documents */
  update?: InputMaybe<Array<AccountUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Account documents */
  upsert?: InputMaybe<Array<AccountUpsertWithNestedWhereUniqueInput>>;
};

export type AccountUpdateManyInput = {
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type AccountUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AccountUpdateManyInput;
  /** Document search */
  where: AccountWhereInput;
};

export type AccountUpdateOneInlineInput = {
  /** Connect existing Account document */
  connect?: InputMaybe<AccountWhereUniqueInput>;
  /** Create and connect one Account document */
  create?: InputMaybe<AccountCreateInput>;
  /** Delete currently connected Account document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Account document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Account document */
  update?: InputMaybe<AccountUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Account document */
  upsert?: InputMaybe<AccountUpsertWithNestedWhereUniqueInput>;
};

export type AccountUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AccountUpdateInput;
  /** Unique document search */
  where: AccountWhereUniqueInput;
};

export type AccountUpsertInput = {
  /** Create document if it didn't exist */
  create: AccountCreateInput;
  /** Update document if it exists */
  update: AccountUpdateInput;
};

export type AccountUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AccountUpsertInput;
  /** Unique document search */
  where: AccountWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AccountWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type AccountWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccountWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty */
  discountCode_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  discountCode_some?: InputMaybe<AccountDiscountCodeWhereInput>;
  documentInStages_every?: InputMaybe<AccountWhereStageInput>;
  documentInStages_none?: InputMaybe<AccountWhereStageInput>;
  documentInStages_some?: InputMaybe<AccountWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  password_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  password_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  password_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  password_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  password_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  password_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  password_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  password_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  password_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AccountWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AccountWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AccountWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AccountWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AccountWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Account record uniquely */
export type AccountWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Aggregate = {
  count: Scalars["Int"]["output"];
};

/** Asset system model */
export type Asset = Node & {
  alt?: Maybe<Scalars["String"]["output"]>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Asset>;
  /** The file name */
  fileName: Scalars["String"]["output"];
  /** The file handle */
  handle: Scalars["String"]["output"];
  /** The height of the file */
  height?: Maybe<Scalars["Float"]["output"]>;
  /** List of Asset versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Asset>;
  /** The mime type of the file */
  mimeType?: Maybe<Scalars["String"]["output"]>;
  productImages: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** The file size */
  size?: Maybe<Scalars["Float"]["output"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  /** Get the url for the asset with provided transformations applied. */
  url: Scalars["String"]["output"];
  /** The file width */
  width?: Maybe<Scalars["Float"]["output"]>;
};

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

/** Asset system model */
export type AssetProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>;
};

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: AssetWhereUniqueInput;
};

/** A connection to a list of items. */
export type AssetConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<AssetEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type AssetCreateInput = {
  alt?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fileName: Scalars["String"]["input"];
  handle: Scalars["String"]["input"];
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  productImages?: InputMaybe<ProductCreateManyInlineInput>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  fileName: Scalars["String"]["input"];
  handle: Scalars["String"]["input"];
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput;
  locale: Locale;
};

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
};

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
};

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
};

/** An edge in a connection. */
export type AssetEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Asset;
};

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  alt?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  productImages_every?: InputMaybe<ProductWhereInput>;
  productImages_none?: InputMaybe<ProductWhereInput>;
  productImages_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum AssetOrderByInput {
  AltAsc = "alt_ASC",
  AltDesc = "alt_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  FileNameAsc = "fileName_ASC",
  FileNameDesc = "fileName_DESC",
  HandleAsc = "handle_ASC",
  HandleDesc = "handle_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  MimeTypeAsc = "mimeType_ASC",
  MimeTypeDesc = "mimeType_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SizeAsc = "size_ASC",
  SizeDesc = "size_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>;
  image?: InputMaybe<ImageTransformationInput>;
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type AssetUpdateInput = {
  alt?: InputMaybe<Scalars["String"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  productImages?: InputMaybe<ProductUpdateManyInlineInput>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>;
};

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>;
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>;
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>;
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>;
};

export type AssetUpdateManyInput = {
  alt?: InputMaybe<Scalars["String"]["input"]>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>;
};

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput;
  /** Document search */
  where: AssetWhereInput;
};

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>;
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>;
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>;
};

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput;
  /** Update document if it exists */
  update: AssetUpdateInput;
};

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput;
  locale: Locale;
  update: AssetUpdateLocalizationDataInput;
};

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput;
  /** Unique document search */
  where: AssetWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  alt?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  alt_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  alt_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  alt_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  alt_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  alt_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  alt_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  alt_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  alt_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<AssetWhereStageInput>;
  documentInStages_none?: InputMaybe<AssetWhereStageInput>;
  documentInStages_some?: InputMaybe<AssetWhereStageInput>;
  fileName?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  handle?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  mimeType?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  productImages_every?: InputMaybe<ProductWhereInput>;
  productImages_none?: InputMaybe<ProductWhereInput>;
  productImages_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  size?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars["Long"]["output"];
};

/** Category of products, e.g. Menswear. */
export type Category = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Category>;
  /** List of Category versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Category>;
  name: Scalars["String"]["output"];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"]["output"];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Category of products, e.g. Menswear. */
export type CategoryCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Category of products, e.g. Menswear. */
export type CategoryDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Category of products, e.g. Menswear. */
export type CategoryHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

/** Category of products, e.g. Menswear. */
export type CategoryLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

/** Category of products, e.g. Menswear. */
export type CategoryProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Category of products, e.g. Menswear. */
export type CategoryPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Category of products, e.g. Menswear. */
export type CategoryScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Category of products, e.g. Menswear. */
export type CategoryUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

/** Category of products, e.g. Menswear. */
export type CategoryUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CategoryConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CategoryWhereUniqueInput;
};

/** A connection to a list of items. */
export type CategoryConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CategoryCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<CategoryCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars["String"]["input"];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  slug: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CategoryCreateLocalizationInput = {
  /** Localization input */
  data: CategoryCreateLocalizationDataInput;
  locale: Locale;
};

export type CategoryCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
};

export type CategoryCreateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Create and connect multiple existing Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
};

export type CategoryCreateOneInlineInput = {
  /** Connect one existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
};

/** An edge in a connection. */
export type CategoryEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Category;
};

/** Identifies documents */
export type CategoryManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CategoryOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CategoryUpdateInput = {
  /** Manage document localizations */
  localizations?: InputMaybe<CategoryUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateLocalizationDataInput = {
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateLocalizationInput = {
  data: CategoryUpdateLocalizationDataInput;
  locale: Locale;
};

export type CategoryUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<CategoryCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<CategoryUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<CategoryUpsertLocalizationInput>>;
};

export type CategoryUpdateManyInlineInput = {
  /** Connect multiple existing Category documents */
  connect?: InputMaybe<Array<CategoryConnectInput>>;
  /** Create and connect multiple Category documents */
  create?: InputMaybe<Array<CategoryCreateInput>>;
  /** Delete multiple Category documents */
  delete?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Disconnect multiple Category documents */
  disconnect?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Category documents */
  set?: InputMaybe<Array<CategoryWhereUniqueInput>>;
  /** Update multiple Category documents */
  update?: InputMaybe<Array<CategoryUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Category documents */
  upsert?: InputMaybe<Array<CategoryUpsertWithNestedWhereUniqueInput>>;
};

export type CategoryUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars["String"]["input"]>;
};

export type CategoryUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CategoryUpdateManyInput;
  /** Document search */
  where: CategoryWhereInput;
};

export type CategoryUpdateOneInlineInput = {
  /** Connect existing Category document */
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  /** Create and connect one Category document */
  create?: InputMaybe<CategoryCreateInput>;
  /** Delete currently connected Category document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Category document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Category document */
  update?: InputMaybe<CategoryUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Category document */
  upsert?: InputMaybe<CategoryUpsertWithNestedWhereUniqueInput>;
};

export type CategoryUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CategoryUpdateInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

export type CategoryUpsertInput = {
  /** Create document if it didn't exist */
  create: CategoryCreateInput;
  /** Update document if it exists */
  update: CategoryUpdateInput;
};

export type CategoryUpsertLocalizationInput = {
  create: CategoryCreateLocalizationDataInput;
  locale: Locale;
  update: CategoryUpdateLocalizationDataInput;
};

export type CategoryUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CategoryUpsertInput;
  /** Unique document search */
  where: CategoryWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CategoryWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CategoryWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_none?: InputMaybe<CategoryWhereStageInput>;
  documentInStages_some?: InputMaybe<CategoryWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CategoryWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CategoryWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CategoryWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Category record uniquely */
export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  css: Scalars["String"]["output"];
  hex: Scalars["Hex"]["output"];
  rgba: Rgba;
};

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars["Hex"]["input"]>;
  rgba?: InputMaybe<RgbaInput>;
};

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars["ID"]["input"]>;
  /** Connect document before specified document */
  before?: InputMaybe<Scalars["ID"]["input"]>;
  /** Connect document at last position */
  end?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Connect document at first position */
  start?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Currency = Node & {
  code: Scalars["String"]["output"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  default: Scalars["Boolean"]["output"];
  /** Get the document in other stages */
  documentInStages: Array<Currency>;
  /** List of Currency versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  productVariantType?: Maybe<ProductVariantType>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rate: Scalars["Float"]["output"];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type CurrencyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type CurrencyHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type CurrencyProductVariantTypeArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type CurrencyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type CurrencyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: CurrencyWhereUniqueInput;
};

/** A connection to a list of items. */
export type CurrencyConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<CurrencyEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type CurrencyCreateInput = {
  code: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  default: Scalars["Boolean"]["input"];
  productVariantType?: InputMaybe<ProductVariantTypeCreateOneInlineInput>;
  rate: Scalars["Float"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type CurrencyCreateManyInlineInput = {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Create and connect multiple existing Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>;
};

export type CurrencyCreateOneInlineInput = {
  /** Connect one existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>;
};

/** An edge in a connection. */
export type CurrencyEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Currency;
};

/** Identifies documents */
export type CurrencyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  default?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  default_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  documentInStages_every?: InputMaybe<CurrencyWhereStageInput>;
  documentInStages_none?: InputMaybe<CurrencyWhereStageInput>;
  documentInStages_some?: InputMaybe<CurrencyWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  productVariantType?: InputMaybe<ProductVariantTypeWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  rate?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  rate_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum CurrencyOrderByInput {
  CodeAsc = "code_ASC",
  CodeDesc = "code_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DefaultAsc = "default_ASC",
  DefaultDesc = "default_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  RateAsc = "rate_ASC",
  RateDesc = "rate_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type CurrencyUpdateInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  default?: InputMaybe<Scalars["Boolean"]["input"]>;
  productVariantType?: InputMaybe<ProductVariantTypeUpdateOneInlineInput>;
  rate?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CurrencyUpdateManyInlineInput = {
  /** Connect multiple existing Currency documents */
  connect?: InputMaybe<Array<CurrencyConnectInput>>;
  /** Create and connect multiple Currency documents */
  create?: InputMaybe<Array<CurrencyCreateInput>>;
  /** Delete multiple Currency documents */
  delete?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Disconnect multiple Currency documents */
  disconnect?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Currency documents */
  set?: InputMaybe<Array<CurrencyWhereUniqueInput>>;
  /** Update multiple Currency documents */
  update?: InputMaybe<Array<CurrencyUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Currency documents */
  upsert?: InputMaybe<Array<CurrencyUpsertWithNestedWhereUniqueInput>>;
};

export type CurrencyUpdateManyInput = {
  rate?: InputMaybe<Scalars["Float"]["input"]>;
};

export type CurrencyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CurrencyUpdateManyInput;
  /** Document search */
  where: CurrencyWhereInput;
};

export type CurrencyUpdateOneInlineInput = {
  /** Connect existing Currency document */
  connect?: InputMaybe<CurrencyWhereUniqueInput>;
  /** Create and connect one Currency document */
  create?: InputMaybe<CurrencyCreateInput>;
  /** Delete currently connected Currency document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Currency document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Currency document */
  update?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Currency document */
  upsert?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>;
};

export type CurrencyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CurrencyUpdateInput;
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
};

export type CurrencyUpsertInput = {
  /** Create document if it didn't exist */
  create: CurrencyCreateInput;
  /** Update document if it exists */
  update: CurrencyUpdateInput;
};

export type CurrencyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CurrencyUpsertInput;
  /** Unique document search */
  where: CurrencyWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type CurrencyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type CurrencyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  default?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  default_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  documentInStages_every?: InputMaybe<CurrencyWhereStageInput>;
  documentInStages_none?: InputMaybe<CurrencyWhereStageInput>;
  documentInStages_some?: InputMaybe<CurrencyWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  productVariantType?: InputMaybe<ProductVariantTypeWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  rate?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than the given value. */
  rate_gt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values greater than or equal the given value. */
  rate_gte?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are contained in given list. */
  rate_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  /** All values less than the given value. */
  rate_lt?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values less than or equal the given value. */
  rate_lte?: InputMaybe<Scalars["Float"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  rate_not?: InputMaybe<Scalars["Float"]["input"]>;
  /** All values that are not contained in given list. */
  rate_not_in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CurrencyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CurrencyWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CurrencyWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CurrencyWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CurrencyWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Currency record uniquely */
export type CurrencyWhereUniqueInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  default?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type DiscountCode = Node & {
  accounts: Array<Account>;
  code: Scalars["String"]["output"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  discount: Scalars["Int"]["output"];
  /** Get the document in other stages */
  documentInStages: Array<DiscountCode>;
  /** List of DiscountCode versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  newsletterUsers: Array<NewsletterUser>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  used: Scalars["Boolean"]["output"];
};

export type DiscountCodeAccountsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AccountWhereInput>;
};

export type DiscountCodeCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type DiscountCodeDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type DiscountCodeHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type DiscountCodeNewsletterUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NewsletterUserWhereInput>;
};

export type DiscountCodePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type DiscountCodeScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type DiscountCodeUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type DiscountCodeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: DiscountCodeWhereUniqueInput;
};

/** A connection to a list of items. */
export type DiscountCodeConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<DiscountCodeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type DiscountCodeCreateInput = {
  accounts?: InputMaybe<AccountCreateManyInlineInput>;
  code: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  discount: Scalars["Int"]["input"];
  newsletterUsers?: InputMaybe<NewsletterUserCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  used: Scalars["Boolean"]["input"];
};

export type DiscountCodeCreateManyInlineInput = {
  /** Connect multiple existing DiscountCode documents */
  connect?: InputMaybe<Array<DiscountCodeWhereUniqueInput>>;
  /** Create and connect multiple existing DiscountCode documents */
  create?: InputMaybe<Array<DiscountCodeCreateInput>>;
};

export type DiscountCodeCreateOneInlineInput = {
  /** Connect one existing DiscountCode document */
  connect?: InputMaybe<DiscountCodeWhereUniqueInput>;
  /** Create and connect one DiscountCode document */
  create?: InputMaybe<DiscountCodeCreateInput>;
};

/** An edge in a connection. */
export type DiscountCodeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: DiscountCode;
};

/** Identifies documents */
export type DiscountCodeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DiscountCodeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DiscountCodeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DiscountCodeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  accounts_every?: InputMaybe<AccountWhereInput>;
  accounts_none?: InputMaybe<AccountWhereInput>;
  accounts_some?: InputMaybe<AccountWhereInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  discount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  discount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  discount_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  discount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  discount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  discount_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  discount_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  documentInStages_every?: InputMaybe<DiscountCodeWhereStageInput>;
  documentInStages_none?: InputMaybe<DiscountCodeWhereStageInput>;
  documentInStages_some?: InputMaybe<DiscountCodeWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  newsletterUsers_every?: InputMaybe<NewsletterUserWhereInput>;
  newsletterUsers_none?: InputMaybe<NewsletterUserWhereInput>;
  newsletterUsers_some?: InputMaybe<NewsletterUserWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  used?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  used_not?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum DiscountCodeOrderByInput {
  CodeAsc = "code_ASC",
  CodeDesc = "code_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DiscountAsc = "discount_ASC",
  DiscountDesc = "discount_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  UsedAsc = "used_ASC",
  UsedDesc = "used_DESC",
}

export type DiscountCodeUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyInlineInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  newsletterUsers?: InputMaybe<NewsletterUserUpdateManyInlineInput>;
  used?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DiscountCodeUpdateManyInlineInput = {
  /** Connect multiple existing DiscountCode documents */
  connect?: InputMaybe<Array<DiscountCodeConnectInput>>;
  /** Create and connect multiple DiscountCode documents */
  create?: InputMaybe<Array<DiscountCodeCreateInput>>;
  /** Delete multiple DiscountCode documents */
  delete?: InputMaybe<Array<DiscountCodeWhereUniqueInput>>;
  /** Disconnect multiple DiscountCode documents */
  disconnect?: InputMaybe<Array<DiscountCodeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing DiscountCode documents */
  set?: InputMaybe<Array<DiscountCodeWhereUniqueInput>>;
  /** Update multiple DiscountCode documents */
  update?: InputMaybe<Array<DiscountCodeUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple DiscountCode documents */
  upsert?: InputMaybe<Array<DiscountCodeUpsertWithNestedWhereUniqueInput>>;
};

export type DiscountCodeUpdateManyInput = {
  code?: InputMaybe<Scalars["String"]["input"]>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  used?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DiscountCodeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: DiscountCodeUpdateManyInput;
  /** Document search */
  where: DiscountCodeWhereInput;
};

export type DiscountCodeUpdateOneInlineInput = {
  /** Connect existing DiscountCode document */
  connect?: InputMaybe<DiscountCodeWhereUniqueInput>;
  /** Create and connect one DiscountCode document */
  create?: InputMaybe<DiscountCodeCreateInput>;
  /** Delete currently connected DiscountCode document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected DiscountCode document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single DiscountCode document */
  update?: InputMaybe<DiscountCodeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single DiscountCode document */
  upsert?: InputMaybe<DiscountCodeUpsertWithNestedWhereUniqueInput>;
};

export type DiscountCodeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: DiscountCodeUpdateInput;
  /** Unique document search */
  where: DiscountCodeWhereUniqueInput;
};

export type DiscountCodeUpsertInput = {
  /** Create document if it didn't exist */
  create: DiscountCodeCreateInput;
  /** Update document if it exists */
  update: DiscountCodeUpdateInput;
};

export type DiscountCodeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: DiscountCodeUpsertInput;
  /** Unique document search */
  where: DiscountCodeWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type DiscountCodeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type DiscountCodeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DiscountCodeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DiscountCodeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DiscountCodeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  accounts_every?: InputMaybe<AccountWhereInput>;
  accounts_none?: InputMaybe<AccountWhereInput>;
  accounts_some?: InputMaybe<AccountWhereInput>;
  code?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  code_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  code_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  code_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  code_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  code_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  code_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  code_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  code_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  discount?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  discount_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  discount_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  discount_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  discount_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  discount_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  discount_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  discount_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  documentInStages_every?: InputMaybe<DiscountCodeWhereStageInput>;
  documentInStages_none?: InputMaybe<DiscountCodeWhereStageInput>;
  documentInStages_some?: InputMaybe<DiscountCodeWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  newsletterUsers_every?: InputMaybe<NewsletterUserWhereInput>;
  newsletterUsers_none?: InputMaybe<NewsletterUserWhereInput>;
  newsletterUsers_some?: InputMaybe<NewsletterUserWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  used?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  used_not?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type DiscountCodeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<DiscountCodeWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<DiscountCodeWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<DiscountCodeWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<DiscountCodeWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References DiscountCode record uniquely */
export type DiscountCodeWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export enum DocumentFileTypes {
  Doc = "doc",
  Docx = "docx",
  Html = "html",
  Jpg = "jpg",
  Odp = "odp",
  Ods = "ods",
  Odt = "odt",
  Pdf = "pdf",
  Png = "png",
  Ppt = "ppt",
  Pptx = "pptx",
  Svg = "svg",
  Txt = "txt",
  Webp = "webp",
  Xls = "xls",
  Xlsx = "xlsx",
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
   * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
   * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
   * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
   * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
   * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
   * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
   * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
   * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
   * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
   * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
   * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
   * SVG:	jpg, odp, ods, odt, pdf, png, and webp
   * HTML:	jpg, odt, pdf, svg, txt, and webp
   * TXT:	jpg, html, odt, pdf, svg, and webp
   */
  format?: InputMaybe<DocumentFileTypes>;
};

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>;
};

export type DocumentVersion = {
  createdAt: Scalars["DateTime"]["output"];
  data?: Maybe<Scalars["Json"]["output"]>;
  id: Scalars["ID"]["output"];
  revision: Scalars["Int"]["output"];
  stage: Stage;
};

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars["ID"]["output"];
  /** The Stage of an object */
  stage: Stage;
};

/** This enumeration holds all typenames that implement the Entity interface. Components implement the Entity interface. At the moment models are not supported, models are listed in this enum to avoid an empty enum without any components. */
export enum EntityTypeName {
  Account = "Account",
  /** Asset system model */
  Asset = "Asset",
  /** Category of products, e.g. Menswear. */
  Category = "Category",
  Currency = "Currency",
  DiscountCode = "DiscountCode",
  NewsletterUser = "NewsletterUser",
  Order = "Order",
  OrderItem = "OrderItem",
  Product = "Product",
  /** Type layout vertical or horizontal */
  ProductVariantType = "ProductVariantType",
  Review = "Review",
  /** Scheduled Operation system model */
  ScheduledOperation = "ScheduledOperation",
  /** Scheduled Release system model */
  ScheduledRelease = "ScheduledRelease",
  /** User system model */
  User = "User",
}

/** Allows to specify input to query components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars["ID"]["input"];
  stage: Stage;
  /** The Type name of an object */
  typename: EntityTypeName;
};

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = "clip",
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = "crop",
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = "max",
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = "scale",
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>;
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>;
};

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = "en",
  Pl = "pl",
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  distance: Scalars["Float"]["output"];
  latitude: Scalars["Float"]["output"];
  longitude: Scalars["Float"]["output"];
};

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput;
};

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars["Float"]["input"];
  longitude: Scalars["Float"]["input"];
};

export type Mutation = {
  /** Create one account */
  createAccount?: Maybe<Account>;
  /**
   * Create one asset
   * @deprecated Asset mutations will be overhauled soon
   */
  createAsset?: Maybe<Asset>;
  /** Create one category */
  createCategory?: Maybe<Category>;
  /** Create one currency */
  createCurrency?: Maybe<Currency>;
  /** Create one discountCode */
  createDiscountCode?: Maybe<DiscountCode>;
  /** Create one newsletterUser */
  createNewsletterUser?: Maybe<NewsletterUser>;
  /** Create one order */
  createOrder?: Maybe<Order>;
  /** Create one orderItem */
  createOrderItem?: Maybe<OrderItem>;
  /** Create one product */
  createProduct?: Maybe<Product>;
  /** Create one productVariantType */
  createProductVariantType?: Maybe<ProductVariantType>;
  /** Create one review */
  createReview?: Maybe<Review>;
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>;
  /** Delete one account from _all_ existing stages. Returns deleted document. */
  deleteAccount?: Maybe<Account>;
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>;
  /** Delete one category from _all_ existing stages. Returns deleted document. */
  deleteCategory?: Maybe<Category>;
  /** Delete one currency from _all_ existing stages. Returns deleted document. */
  deleteCurrency?: Maybe<Currency>;
  /** Delete one discountCode from _all_ existing stages. Returns deleted document. */
  deleteDiscountCode?: Maybe<DiscountCode>;
  /**
   * Delete many Account documents
   * @deprecated Please use the new paginated many mutation (deleteManyAccountsConnection)
   */
  deleteManyAccounts: BatchPayload;
  /** Delete many Account documents, return deleted documents */
  deleteManyAccountsConnection: AccountConnection;
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload;
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection;
  /**
   * Delete many Category documents
   * @deprecated Please use the new paginated many mutation (deleteManyCategoriesConnection)
   */
  deleteManyCategories: BatchPayload;
  /** Delete many Category documents, return deleted documents */
  deleteManyCategoriesConnection: CategoryConnection;
  /**
   * Delete many Currency documents
   * @deprecated Please use the new paginated many mutation (deleteManyCurrenciesConnection)
   */
  deleteManyCurrencies: BatchPayload;
  /** Delete many Currency documents, return deleted documents */
  deleteManyCurrenciesConnection: CurrencyConnection;
  /**
   * Delete many DiscountCode documents
   * @deprecated Please use the new paginated many mutation (deleteManyDiscountCodesConnection)
   */
  deleteManyDiscountCodes: BatchPayload;
  /** Delete many DiscountCode documents, return deleted documents */
  deleteManyDiscountCodesConnection: DiscountCodeConnection;
  /**
   * Delete many NewsletterUser documents
   * @deprecated Please use the new paginated many mutation (deleteManyNewsletterUsersConnection)
   */
  deleteManyNewsletterUsers: BatchPayload;
  /** Delete many NewsletterUser documents, return deleted documents */
  deleteManyNewsletterUsersConnection: NewsletterUserConnection;
  /**
   * Delete many OrderItem documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrderItemsConnection)
   */
  deleteManyOrderItems: BatchPayload;
  /** Delete many OrderItem documents, return deleted documents */
  deleteManyOrderItemsConnection: OrderItemConnection;
  /**
   * Delete many Order documents
   * @deprecated Please use the new paginated many mutation (deleteManyOrdersConnection)
   */
  deleteManyOrders: BatchPayload;
  /** Delete many Order documents, return deleted documents */
  deleteManyOrdersConnection: OrderConnection;
  /**
   * Delete many ProductVariantType documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductVariantTypesConnection)
   */
  deleteManyProductVariantTypes: BatchPayload;
  /** Delete many ProductVariantType documents, return deleted documents */
  deleteManyProductVariantTypesConnection: ProductVariantTypeConnection;
  /**
   * Delete many Product documents
   * @deprecated Please use the new paginated many mutation (deleteManyProductsConnection)
   */
  deleteManyProducts: BatchPayload;
  /** Delete many Product documents, return deleted documents */
  deleteManyProductsConnection: ProductConnection;
  /**
   * Delete many Review documents
   * @deprecated Please use the new paginated many mutation (deleteManyReviewsConnection)
   */
  deleteManyReviews: BatchPayload;
  /** Delete many Review documents, return deleted documents */
  deleteManyReviewsConnection: ReviewConnection;
  /** Delete one newsletterUser from _all_ existing stages. Returns deleted document. */
  deleteNewsletterUser?: Maybe<NewsletterUser>;
  /** Delete one order from _all_ existing stages. Returns deleted document. */
  deleteOrder?: Maybe<Order>;
  /** Delete one orderItem from _all_ existing stages. Returns deleted document. */
  deleteOrderItem?: Maybe<OrderItem>;
  /** Delete one product from _all_ existing stages. Returns deleted document. */
  deleteProduct?: Maybe<Product>;
  /** Delete one productVariantType from _all_ existing stages. Returns deleted document. */
  deleteProductVariantType?: Maybe<ProductVariantType>;
  /** Delete one review from _all_ existing stages. Returns deleted document. */
  deleteReview?: Maybe<Review>;
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>;
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>;
  /** Publish one account */
  publishAccount?: Maybe<Account>;
  /** Publish one asset */
  publishAsset?: Maybe<Asset>;
  /** Publish one category */
  publishCategory?: Maybe<Category>;
  /** Publish one currency */
  publishCurrency?: Maybe<Currency>;
  /** Publish one discountCode */
  publishDiscountCode?: Maybe<DiscountCode>;
  /**
   * Publish many Account documents
   * @deprecated Please use the new paginated many mutation (publishManyAccountsConnection)
   */
  publishManyAccounts: BatchPayload;
  /** Publish many Account documents */
  publishManyAccountsConnection: AccountConnection;
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload;
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection;
  /**
   * Publish many Category documents
   * @deprecated Please use the new paginated many mutation (publishManyCategoriesConnection)
   */
  publishManyCategories: BatchPayload;
  /** Publish many Category documents */
  publishManyCategoriesConnection: CategoryConnection;
  /**
   * Publish many Currency documents
   * @deprecated Please use the new paginated many mutation (publishManyCurrenciesConnection)
   */
  publishManyCurrencies: BatchPayload;
  /** Publish many Currency documents */
  publishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Publish many DiscountCode documents
   * @deprecated Please use the new paginated many mutation (publishManyDiscountCodesConnection)
   */
  publishManyDiscountCodes: BatchPayload;
  /** Publish many DiscountCode documents */
  publishManyDiscountCodesConnection: DiscountCodeConnection;
  /**
   * Publish many NewsletterUser documents
   * @deprecated Please use the new paginated many mutation (publishManyNewsletterUsersConnection)
   */
  publishManyNewsletterUsers: BatchPayload;
  /** Publish many NewsletterUser documents */
  publishManyNewsletterUsersConnection: NewsletterUserConnection;
  /**
   * Publish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (publishManyOrderItemsConnection)
   */
  publishManyOrderItems: BatchPayload;
  /** Publish many OrderItem documents */
  publishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Publish many Order documents
   * @deprecated Please use the new paginated many mutation (publishManyOrdersConnection)
   */
  publishManyOrders: BatchPayload;
  /** Publish many Order documents */
  publishManyOrdersConnection: OrderConnection;
  /**
   * Publish many ProductVariantType documents
   * @deprecated Please use the new paginated many mutation (publishManyProductVariantTypesConnection)
   */
  publishManyProductVariantTypes: BatchPayload;
  /** Publish many ProductVariantType documents */
  publishManyProductVariantTypesConnection: ProductVariantTypeConnection;
  /**
   * Publish many Product documents
   * @deprecated Please use the new paginated many mutation (publishManyProductsConnection)
   */
  publishManyProducts: BatchPayload;
  /** Publish many Product documents */
  publishManyProductsConnection: ProductConnection;
  /**
   * Publish many Review documents
   * @deprecated Please use the new paginated many mutation (publishManyReviewsConnection)
   */
  publishManyReviews: BatchPayload;
  /** Publish many Review documents */
  publishManyReviewsConnection: ReviewConnection;
  /** Publish one newsletterUser */
  publishNewsletterUser?: Maybe<NewsletterUser>;
  /** Publish one order */
  publishOrder?: Maybe<Order>;
  /** Publish one orderItem */
  publishOrderItem?: Maybe<OrderItem>;
  /** Publish one product */
  publishProduct?: Maybe<Product>;
  /** Publish one productVariantType */
  publishProductVariantType?: Maybe<ProductVariantType>;
  /** Publish one review */
  publishReview?: Maybe<Review>;
  /** Schedule to publish one account */
  schedulePublishAccount?: Maybe<Account>;
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>;
  /** Schedule to publish one category */
  schedulePublishCategory?: Maybe<Category>;
  /** Schedule to publish one currency */
  schedulePublishCurrency?: Maybe<Currency>;
  /** Schedule to publish one discountCode */
  schedulePublishDiscountCode?: Maybe<DiscountCode>;
  /** Schedule to publish one newsletterUser */
  schedulePublishNewsletterUser?: Maybe<NewsletterUser>;
  /** Schedule to publish one order */
  schedulePublishOrder?: Maybe<Order>;
  /** Schedule to publish one orderItem */
  schedulePublishOrderItem?: Maybe<OrderItem>;
  /** Schedule to publish one product */
  schedulePublishProduct?: Maybe<Product>;
  /** Schedule to publish one productVariantType */
  schedulePublishProductVariantType?: Maybe<ProductVariantType>;
  /** Schedule to publish one review */
  schedulePublishReview?: Maybe<Review>;
  /** Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAccount?: Maybe<Account>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCategory?: Maybe<Category>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCurrency?: Maybe<Currency>;
  /** Unpublish one discountCode from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishDiscountCode?: Maybe<DiscountCode>;
  /** Unpublish one newsletterUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishNewsletterUser?: Maybe<NewsletterUser>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrder?: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProduct?: Maybe<Product>;
  /** Unpublish one productVariantType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProductVariantType?: Maybe<ProductVariantType>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishReview?: Maybe<Review>;
  /** Unpublish one account from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAccount?: Maybe<Account>;
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>;
  /** Unpublish one category from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCategory?: Maybe<Category>;
  /** Unpublish one currency from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCurrency?: Maybe<Currency>;
  /** Unpublish one discountCode from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishDiscountCode?: Maybe<DiscountCode>;
  /**
   * Unpublish many Account documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAccountsConnection)
   */
  unpublishManyAccounts: BatchPayload;
  /** Find many Account documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAccountsConnection: AccountConnection;
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload;
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection;
  /**
   * Unpublish many Category documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCategoriesConnection)
   */
  unpublishManyCategories: BatchPayload;
  /** Find many Category documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCategoriesConnection: CategoryConnection;
  /**
   * Unpublish many Currency documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCurrenciesConnection)
   */
  unpublishManyCurrencies: BatchPayload;
  /** Find many Currency documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCurrenciesConnection: CurrencyConnection;
  /**
   * Unpublish many DiscountCode documents
   * @deprecated Please use the new paginated many mutation (unpublishManyDiscountCodesConnection)
   */
  unpublishManyDiscountCodes: BatchPayload;
  /** Find many DiscountCode documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyDiscountCodesConnection: DiscountCodeConnection;
  /**
   * Unpublish many NewsletterUser documents
   * @deprecated Please use the new paginated many mutation (unpublishManyNewsletterUsersConnection)
   */
  unpublishManyNewsletterUsers: BatchPayload;
  /** Find many NewsletterUser documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyNewsletterUsersConnection: NewsletterUserConnection;
  /**
   * Unpublish many OrderItem documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrderItemsConnection)
   */
  unpublishManyOrderItems: BatchPayload;
  /** Find many OrderItem documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrderItemsConnection: OrderItemConnection;
  /**
   * Unpublish many Order documents
   * @deprecated Please use the new paginated many mutation (unpublishManyOrdersConnection)
   */
  unpublishManyOrders: BatchPayload;
  /** Find many Order documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyOrdersConnection: OrderConnection;
  /**
   * Unpublish many ProductVariantType documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductVariantTypesConnection)
   */
  unpublishManyProductVariantTypes: BatchPayload;
  /** Find many ProductVariantType documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductVariantTypesConnection: ProductVariantTypeConnection;
  /**
   * Unpublish many Product documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProductsConnection)
   */
  unpublishManyProducts: BatchPayload;
  /** Find many Product documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProductsConnection: ProductConnection;
  /**
   * Unpublish many Review documents
   * @deprecated Please use the new paginated many mutation (unpublishManyReviewsConnection)
   */
  unpublishManyReviews: BatchPayload;
  /** Find many Review documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyReviewsConnection: ReviewConnection;
  /** Unpublish one newsletterUser from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishNewsletterUser?: Maybe<NewsletterUser>;
  /** Unpublish one order from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrder?: Maybe<Order>;
  /** Unpublish one orderItem from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishOrderItem?: Maybe<OrderItem>;
  /** Unpublish one product from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProduct?: Maybe<Product>;
  /** Unpublish one productVariantType from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProductVariantType?: Maybe<ProductVariantType>;
  /** Unpublish one review from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishReview?: Maybe<Review>;
  /** Update one account */
  updateAccount?: Maybe<Account>;
  /** Update one asset */
  updateAsset?: Maybe<Asset>;
  /** Update one category */
  updateCategory?: Maybe<Category>;
  /** Update one currency */
  updateCurrency?: Maybe<Currency>;
  /** Update one discountCode */
  updateDiscountCode?: Maybe<DiscountCode>;
  /**
   * Update many accounts
   * @deprecated Please use the new paginated many mutation (updateManyAccountsConnection)
   */
  updateManyAccounts: BatchPayload;
  /** Update many Account documents */
  updateManyAccountsConnection: AccountConnection;
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload;
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection;
  /**
   * Update many categories
   * @deprecated Please use the new paginated many mutation (updateManyCategoriesConnection)
   */
  updateManyCategories: BatchPayload;
  /** Update many Category documents */
  updateManyCategoriesConnection: CategoryConnection;
  /**
   * Update many currencies
   * @deprecated Please use the new paginated many mutation (updateManyCurrenciesConnection)
   */
  updateManyCurrencies: BatchPayload;
  /** Update many Currency documents */
  updateManyCurrenciesConnection: CurrencyConnection;
  /**
   * Update many discountCodes
   * @deprecated Please use the new paginated many mutation (updateManyDiscountCodesConnection)
   */
  updateManyDiscountCodes: BatchPayload;
  /** Update many DiscountCode documents */
  updateManyDiscountCodesConnection: DiscountCodeConnection;
  /**
   * Update many newsletterUsers
   * @deprecated Please use the new paginated many mutation (updateManyNewsletterUsersConnection)
   */
  updateManyNewsletterUsers: BatchPayload;
  /** Update many NewsletterUser documents */
  updateManyNewsletterUsersConnection: NewsletterUserConnection;
  /**
   * Update many orderItems
   * @deprecated Please use the new paginated many mutation (updateManyOrderItemsConnection)
   */
  updateManyOrderItems: BatchPayload;
  /** Update many OrderItem documents */
  updateManyOrderItemsConnection: OrderItemConnection;
  /**
   * Update many orders
   * @deprecated Please use the new paginated many mutation (updateManyOrdersConnection)
   */
  updateManyOrders: BatchPayload;
  /** Update many Order documents */
  updateManyOrdersConnection: OrderConnection;
  /**
   * Update many productVariantTypes
   * @deprecated Please use the new paginated many mutation (updateManyProductVariantTypesConnection)
   */
  updateManyProductVariantTypes: BatchPayload;
  /** Update many ProductVariantType documents */
  updateManyProductVariantTypesConnection: ProductVariantTypeConnection;
  /**
   * Update many products
   * @deprecated Please use the new paginated many mutation (updateManyProductsConnection)
   */
  updateManyProducts: BatchPayload;
  /** Update many Product documents */
  updateManyProductsConnection: ProductConnection;
  /**
   * Update many reviews
   * @deprecated Please use the new paginated many mutation (updateManyReviewsConnection)
   */
  updateManyReviews: BatchPayload;
  /** Update many Review documents */
  updateManyReviewsConnection: ReviewConnection;
  /** Update one newsletterUser */
  updateNewsletterUser?: Maybe<NewsletterUser>;
  /** Update one order */
  updateOrder?: Maybe<Order>;
  /** Update one orderItem */
  updateOrderItem?: Maybe<OrderItem>;
  /** Update one product */
  updateProduct?: Maybe<Product>;
  /** Update one productVariantType */
  updateProductVariantType?: Maybe<ProductVariantType>;
  /** Update one review */
  updateReview?: Maybe<Review>;
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>;
  /** Upsert one account */
  upsertAccount?: Maybe<Account>;
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>;
  /** Upsert one category */
  upsertCategory?: Maybe<Category>;
  /** Upsert one currency */
  upsertCurrency?: Maybe<Currency>;
  /** Upsert one discountCode */
  upsertDiscountCode?: Maybe<DiscountCode>;
  /** Upsert one newsletterUser */
  upsertNewsletterUser?: Maybe<NewsletterUser>;
  /** Upsert one order */
  upsertOrder?: Maybe<Order>;
  /** Upsert one orderItem */
  upsertOrderItem?: Maybe<OrderItem>;
  /** Upsert one product */
  upsertProduct?: Maybe<Product>;
  /** Upsert one productVariantType */
  upsertProductVariantType?: Maybe<ProductVariantType>;
  /** Upsert one review */
  upsertReview?: Maybe<Review>;
};

export type MutationCreateAccountArgs = {
  data: AccountCreateInput;
};

export type MutationCreateAssetArgs = {
  data: AssetCreateInput;
};

export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};

export type MutationCreateCurrencyArgs = {
  data: CurrencyCreateInput;
};

export type MutationCreateDiscountCodeArgs = {
  data: DiscountCodeCreateInput;
};

export type MutationCreateNewsletterUserArgs = {
  data: NewsletterUserCreateInput;
};

export type MutationCreateOrderArgs = {
  data: OrderCreateInput;
};

export type MutationCreateOrderItemArgs = {
  data: OrderItemCreateInput;
};

export type MutationCreateProductArgs = {
  data: ProductCreateInput;
};

export type MutationCreateProductVariantTypeArgs = {
  data: ProductVariantTypeCreateInput;
};

export type MutationCreateReviewArgs = {
  data: ReviewCreateInput;
};

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput;
};

export type MutationDeleteAccountArgs = {
  where: AccountWhereUniqueInput;
};

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput;
};

export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};

export type MutationDeleteCurrencyArgs = {
  where: CurrencyWhereUniqueInput;
};

export type MutationDeleteDiscountCodeArgs = {
  where: DiscountCodeWhereUniqueInput;
};

export type MutationDeleteManyAccountsArgs = {
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationDeleteManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationDeleteManyCategoriesArgs = {
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationDeleteManyCurrenciesArgs = {
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationDeleteManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationDeleteManyDiscountCodesArgs = {
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationDeleteManyDiscountCodesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationDeleteManyNewsletterUsersArgs = {
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationDeleteManyNewsletterUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationDeleteManyOrderItemsArgs = {
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationDeleteManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationDeleteManyOrdersArgs = {
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationDeleteManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationDeleteManyProductVariantTypesArgs = {
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationDeleteManyProductVariantTypesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationDeleteManyProductsArgs = {
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationDeleteManyReviewsArgs = {
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationDeleteManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationDeleteNewsletterUserArgs = {
  where: NewsletterUserWhereUniqueInput;
};

export type MutationDeleteOrderArgs = {
  where: OrderWhereUniqueInput;
};

export type MutationDeleteOrderItemArgs = {
  where: OrderItemWhereUniqueInput;
};

export type MutationDeleteProductArgs = {
  where: ProductWhereUniqueInput;
};

export type MutationDeleteProductVariantTypeArgs = {
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationDeleteReviewArgs = {
  where: ReviewWhereUniqueInput;
};

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput;
};

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationPublishAccountArgs = {
  to?: Array<Stage>;
  where: AccountWhereUniqueInput;
};

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishCurrencyArgs = {
  to?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};

export type MutationPublishDiscountCodeArgs = {
  to?: Array<Stage>;
  where: DiscountCodeWhereUniqueInput;
};

export type MutationPublishManyAccountsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationPublishManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<AssetManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyCategoriesArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CategoryManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyCurrenciesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationPublishManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationPublishManyDiscountCodesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationPublishManyDiscountCodesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationPublishManyNewsletterUsersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationPublishManyNewsletterUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationPublishManyOrderItemsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationPublishManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationPublishManyOrdersArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationPublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationPublishManyProductVariantTypesArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationPublishManyProductVariantTypesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationPublishManyProductsArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ProductManyWhereInput>;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishManyReviewsArgs = {
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationPublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: InputMaybe<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  to?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationPublishNewsletterUserArgs = {
  to?: Array<Stage>;
  where: NewsletterUserWhereUniqueInput;
};

export type MutationPublishOrderArgs = {
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};

export type MutationPublishOrderItemArgs = {
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};

export type MutationPublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationPublishProductVariantTypeArgs = {
  to?: Array<Stage>;
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationPublishReviewArgs = {
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};

export type MutationSchedulePublishAccountArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: AccountWhereUniqueInput;
};

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: AssetWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishCategoryArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: CategoryWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishCurrencyArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};

export type MutationSchedulePublishDiscountCodeArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: DiscountCodeWhereUniqueInput;
};

export type MutationSchedulePublishNewsletterUserArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: NewsletterUserWhereUniqueInput;
};

export type MutationSchedulePublishOrderArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: OrderWhereUniqueInput;
};

export type MutationSchedulePublishOrderItemArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};

export type MutationSchedulePublishProductArgs = {
  locales?: InputMaybe<Array<Locale>>;
  publishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: ProductWhereUniqueInput;
  withDefaultLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSchedulePublishProductVariantTypeArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationSchedulePublishReviewArgs = {
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  to?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};

export type MutationScheduleUnpublishAccountArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: AccountWhereUniqueInput;
};

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: AssetWhereUniqueInput;
};

export type MutationScheduleUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: CategoryWhereUniqueInput;
};

export type MutationScheduleUnpublishCurrencyArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: CurrencyWhereUniqueInput;
};

export type MutationScheduleUnpublishDiscountCodeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: DiscountCodeWhereUniqueInput;
};

export type MutationScheduleUnpublishNewsletterUserArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: NewsletterUserWhereUniqueInput;
};

export type MutationScheduleUnpublishOrderArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: OrderWhereUniqueInput;
};

export type MutationScheduleUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: OrderItemWhereUniqueInput;
};

export type MutationScheduleUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: ProductWhereUniqueInput;
};

export type MutationScheduleUnpublishProductVariantTypeArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationScheduleUnpublishReviewArgs = {
  from?: Array<Stage>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  releaseId?: InputMaybe<Scalars["String"]["input"]>;
  where: ReviewWhereUniqueInput;
};

export type MutationUnpublishAccountArgs = {
  from?: Array<Stage>;
  where: AccountWhereUniqueInput;
};

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: AssetWhereUniqueInput;
};

export type MutationUnpublishCategoryArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: CategoryWhereUniqueInput;
};

export type MutationUnpublishCurrencyArgs = {
  from?: Array<Stage>;
  where: CurrencyWhereUniqueInput;
};

export type MutationUnpublishDiscountCodeArgs = {
  from?: Array<Stage>;
  where: DiscountCodeWhereUniqueInput;
};

export type MutationUnpublishManyAccountsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUnpublishManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUnpublishManyCategoriesArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUnpublishManyCurrenciesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUnpublishManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUnpublishManyDiscountCodesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationUnpublishManyDiscountCodesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationUnpublishManyNewsletterUsersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationUnpublishManyNewsletterUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationUnpublishManyOrderItemsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUnpublishManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUnpublishManyOrdersArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUnpublishManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUnpublishManyProductVariantTypesArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationUnpublishManyProductVariantTypesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationUnpublishManyProductsArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUnpublishManyReviewsArgs = {
  from?: Array<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUnpublishManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  from?: Array<Stage>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: InputMaybe<Stage>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUnpublishNewsletterUserArgs = {
  from?: Array<Stage>;
  where: NewsletterUserWhereUniqueInput;
};

export type MutationUnpublishOrderArgs = {
  from?: Array<Stage>;
  where: OrderWhereUniqueInput;
};

export type MutationUnpublishOrderItemArgs = {
  from?: Array<Stage>;
  where: OrderItemWhereUniqueInput;
};

export type MutationUnpublishProductArgs = {
  from?: Array<Stage>;
  locales?: InputMaybe<Array<Locale>>;
  unpublishBase?: InputMaybe<Scalars["Boolean"]["input"]>;
  where: ProductWhereUniqueInput;
};

export type MutationUnpublishProductVariantTypeArgs = {
  from?: Array<Stage>;
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationUnpublishReviewArgs = {
  from?: Array<Stage>;
  where: ReviewWhereUniqueInput;
};

export type MutationUpdateAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpdateCurrencyArgs = {
  data: CurrencyUpdateInput;
  where: CurrencyWhereUniqueInput;
};

export type MutationUpdateDiscountCodeArgs = {
  data: DiscountCodeUpdateInput;
  where: DiscountCodeWhereUniqueInput;
};

export type MutationUpdateManyAccountsArgs = {
  data: AccountUpdateManyInput;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUpdateManyAccountsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: AccountUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AccountManyWhereInput>;
};

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: AssetUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetManyWhereInput>;
};

export type MutationUpdateManyCategoriesArgs = {
  data: CategoryUpdateManyInput;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: CategoryUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CategoryManyWhereInput>;
};

export type MutationUpdateManyCurrenciesArgs = {
  data: CurrencyUpdateManyInput;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUpdateManyCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: CurrencyUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CurrencyManyWhereInput>;
};

export type MutationUpdateManyDiscountCodesArgs = {
  data: DiscountCodeUpdateManyInput;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationUpdateManyDiscountCodesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: DiscountCodeUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<DiscountCodeManyWhereInput>;
};

export type MutationUpdateManyNewsletterUsersArgs = {
  data: NewsletterUserUpdateManyInput;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationUpdateManyNewsletterUsersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: NewsletterUserUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NewsletterUserManyWhereInput>;
};

export type MutationUpdateManyOrderItemsArgs = {
  data: OrderItemUpdateManyInput;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUpdateManyOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: OrderItemUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderItemManyWhereInput>;
};

export type MutationUpdateManyOrdersArgs = {
  data: OrderUpdateManyInput;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUpdateManyOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: OrderUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderManyWhereInput>;
};

export type MutationUpdateManyProductVariantTypesArgs = {
  data: ProductVariantTypeUpdateManyInput;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationUpdateManyProductVariantTypesConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: ProductVariantTypeUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductVariantTypeManyWhereInput>;
};

export type MutationUpdateManyProductsArgs = {
  data: ProductUpdateManyInput;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyProductsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: ProductUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductManyWhereInput>;
};

export type MutationUpdateManyReviewsArgs = {
  data: ReviewUpdateManyInput;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUpdateManyReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["ID"]["input"]>;
  before?: InputMaybe<Scalars["ID"]["input"]>;
  data: ReviewUpdateManyInput;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ReviewManyWhereInput>;
};

export type MutationUpdateNewsletterUserArgs = {
  data: NewsletterUserUpdateInput;
  where: NewsletterUserWhereUniqueInput;
};

export type MutationUpdateOrderArgs = {
  data: OrderUpdateInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpdateOrderItemArgs = {
  data: OrderItemUpdateInput;
  where: OrderItemWhereUniqueInput;
};

export type MutationUpdateProductArgs = {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpdateProductVariantTypeArgs = {
  data: ProductVariantTypeUpdateInput;
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationUpdateReviewArgs = {
  data: ReviewUpdateInput;
  where: ReviewWhereUniqueInput;
};

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput;
  where: ScheduledReleaseWhereUniqueInput;
};

export type MutationUpsertAccountArgs = {
  upsert: AccountUpsertInput;
  where: AccountWhereUniqueInput;
};

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput;
  where: AssetWhereUniqueInput;
};

export type MutationUpsertCategoryArgs = {
  upsert: CategoryUpsertInput;
  where: CategoryWhereUniqueInput;
};

export type MutationUpsertCurrencyArgs = {
  upsert: CurrencyUpsertInput;
  where: CurrencyWhereUniqueInput;
};

export type MutationUpsertDiscountCodeArgs = {
  upsert: DiscountCodeUpsertInput;
  where: DiscountCodeWhereUniqueInput;
};

export type MutationUpsertNewsletterUserArgs = {
  upsert: NewsletterUserUpsertInput;
  where: NewsletterUserWhereUniqueInput;
};

export type MutationUpsertOrderArgs = {
  upsert: OrderUpsertInput;
  where: OrderWhereUniqueInput;
};

export type MutationUpsertOrderItemArgs = {
  upsert: OrderItemUpsertInput;
  where: OrderItemWhereUniqueInput;
};

export type MutationUpsertProductArgs = {
  upsert: ProductUpsertInput;
  where: ProductWhereUniqueInput;
};

export type MutationUpsertProductVariantTypeArgs = {
  upsert: ProductVariantTypeUpsertInput;
  where: ProductVariantTypeWhereUniqueInput;
};

export type MutationUpsertReviewArgs = {
  upsert: ReviewUpsertInput;
  where: ReviewWhereUniqueInput;
};

export type NewsletterUser = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  discountCodes: Array<NewsletterUserDiscountCodes>;
  /** Get the document in other stages */
  documentInStages: Array<NewsletterUser>;
  email: Scalars["String"]["output"];
  /** List of NewsletterUser versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type NewsletterUserCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsletterUserDiscountCodesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NewsletterUserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type NewsletterUserHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type NewsletterUserPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsletterUserScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type NewsletterUserUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type NewsletterUserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: NewsletterUserWhereUniqueInput;
};

/** A connection to a list of items. */
export type NewsletterUserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<NewsletterUserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type NewsletterUserCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  discountCodes?: InputMaybe<NewsletterUserDiscountCodesCreateManyInlineInput>;
  email: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type NewsletterUserCreateManyInlineInput = {
  /** Connect multiple existing NewsletterUser documents */
  connect?: InputMaybe<Array<NewsletterUserWhereUniqueInput>>;
  /** Create and connect multiple existing NewsletterUser documents */
  create?: InputMaybe<Array<NewsletterUserCreateInput>>;
};

export type NewsletterUserCreateOneInlineInput = {
  /** Connect one existing NewsletterUser document */
  connect?: InputMaybe<NewsletterUserWhereUniqueInput>;
  /** Create and connect one NewsletterUser document */
  create?: InputMaybe<NewsletterUserCreateInput>;
};

export type NewsletterUserDiscountCodes = DiscountCode;

export type NewsletterUserDiscountCodesConnectInput = {
  DiscountCode?: InputMaybe<DiscountCodeConnectInput>;
};

export type NewsletterUserDiscountCodesCreateInput = {
  DiscountCode?: InputMaybe<DiscountCodeCreateInput>;
};

export type NewsletterUserDiscountCodesCreateManyInlineInput = {
  /** Connect multiple existing NewsletterUserDiscountCodes documents */
  connect?: InputMaybe<Array<NewsletterUserDiscountCodesWhereUniqueInput>>;
  /** Create and connect multiple existing NewsletterUserDiscountCodes documents */
  create?: InputMaybe<Array<NewsletterUserDiscountCodesCreateInput>>;
};

export type NewsletterUserDiscountCodesCreateOneInlineInput = {
  /** Connect one existing NewsletterUserDiscountCodes document */
  connect?: InputMaybe<NewsletterUserDiscountCodesWhereUniqueInput>;
  /** Create and connect one NewsletterUserDiscountCodes document */
  create?: InputMaybe<NewsletterUserDiscountCodesCreateInput>;
};

export type NewsletterUserDiscountCodesUpdateInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpdateInput>;
};

export type NewsletterUserDiscountCodesUpdateManyInlineInput = {
  /** Connect multiple existing NewsletterUserDiscountCodes documents */
  connect?: InputMaybe<Array<NewsletterUserDiscountCodesConnectInput>>;
  /** Create and connect multiple NewsletterUserDiscountCodes documents */
  create?: InputMaybe<Array<NewsletterUserDiscountCodesCreateInput>>;
  /** Delete multiple NewsletterUserDiscountCodes documents */
  delete?: InputMaybe<Array<NewsletterUserDiscountCodesWhereUniqueInput>>;
  /** Disconnect multiple NewsletterUserDiscountCodes documents */
  disconnect?: InputMaybe<Array<NewsletterUserDiscountCodesWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewsletterUserDiscountCodes documents */
  set?: InputMaybe<Array<NewsletterUserDiscountCodesWhereUniqueInput>>;
  /** Update multiple NewsletterUserDiscountCodes documents */
  update?: InputMaybe<
    Array<NewsletterUserDiscountCodesUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple NewsletterUserDiscountCodes documents */
  upsert?: InputMaybe<
    Array<NewsletterUserDiscountCodesUpsertWithNestedWhereUniqueInput>
  >;
};

export type NewsletterUserDiscountCodesUpdateManyWithNestedWhereInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpdateManyWithNestedWhereInput>;
};

export type NewsletterUserDiscountCodesUpdateOneInlineInput = {
  /** Connect existing NewsletterUserDiscountCodes document */
  connect?: InputMaybe<NewsletterUserDiscountCodesWhereUniqueInput>;
  /** Create and connect one NewsletterUserDiscountCodes document */
  create?: InputMaybe<NewsletterUserDiscountCodesCreateInput>;
  /** Delete currently connected NewsletterUserDiscountCodes document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected NewsletterUserDiscountCodes document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single NewsletterUserDiscountCodes document */
  update?: InputMaybe<NewsletterUserDiscountCodesUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewsletterUserDiscountCodes document */
  upsert?: InputMaybe<NewsletterUserDiscountCodesUpsertWithNestedWhereUniqueInput>;
};

export type NewsletterUserDiscountCodesUpdateWithNestedWhereUniqueInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpdateWithNestedWhereUniqueInput>;
};

export type NewsletterUserDiscountCodesUpsertWithNestedWhereUniqueInput = {
  DiscountCode?: InputMaybe<DiscountCodeUpsertWithNestedWhereUniqueInput>;
};

export type NewsletterUserDiscountCodesWhereInput = {
  DiscountCode?: InputMaybe<DiscountCodeWhereInput>;
};

export type NewsletterUserDiscountCodesWhereUniqueInput = {
  DiscountCode?: InputMaybe<DiscountCodeWhereUniqueInput>;
};

/** An edge in a connection. */
export type NewsletterUserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: NewsletterUser;
};

/** Identifies documents */
export type NewsletterUserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty */
  discountCodes_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  discountCodes_some?: InputMaybe<NewsletterUserDiscountCodesWhereInput>;
  documentInStages_every?: InputMaybe<NewsletterUserWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterUserWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterUserWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum NewsletterUserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type NewsletterUserUpdateInput = {
  discountCodes?: InputMaybe<NewsletterUserDiscountCodesUpdateManyInlineInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type NewsletterUserUpdateManyInlineInput = {
  /** Connect multiple existing NewsletterUser documents */
  connect?: InputMaybe<Array<NewsletterUserConnectInput>>;
  /** Create and connect multiple NewsletterUser documents */
  create?: InputMaybe<Array<NewsletterUserCreateInput>>;
  /** Delete multiple NewsletterUser documents */
  delete?: InputMaybe<Array<NewsletterUserWhereUniqueInput>>;
  /** Disconnect multiple NewsletterUser documents */
  disconnect?: InputMaybe<Array<NewsletterUserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing NewsletterUser documents */
  set?: InputMaybe<Array<NewsletterUserWhereUniqueInput>>;
  /** Update multiple NewsletterUser documents */
  update?: InputMaybe<Array<NewsletterUserUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple NewsletterUser documents */
  upsert?: InputMaybe<Array<NewsletterUserUpsertWithNestedWhereUniqueInput>>;
};

export type NewsletterUserUpdateManyInput = {
  /** No fields in updateMany data input */
  _?: InputMaybe<Scalars["String"]["input"]>;
};

export type NewsletterUserUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: NewsletterUserUpdateManyInput;
  /** Document search */
  where: NewsletterUserWhereInput;
};

export type NewsletterUserUpdateOneInlineInput = {
  /** Connect existing NewsletterUser document */
  connect?: InputMaybe<NewsletterUserWhereUniqueInput>;
  /** Create and connect one NewsletterUser document */
  create?: InputMaybe<NewsletterUserCreateInput>;
  /** Delete currently connected NewsletterUser document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected NewsletterUser document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single NewsletterUser document */
  update?: InputMaybe<NewsletterUserUpdateWithNestedWhereUniqueInput>;
  /** Upsert single NewsletterUser document */
  upsert?: InputMaybe<NewsletterUserUpsertWithNestedWhereUniqueInput>;
};

export type NewsletterUserUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: NewsletterUserUpdateInput;
  /** Unique document search */
  where: NewsletterUserWhereUniqueInput;
};

export type NewsletterUserUpsertInput = {
  /** Create document if it didn't exist */
  create: NewsletterUserCreateInput;
  /** Update document if it exists */
  update: NewsletterUserUpdateInput;
};

export type NewsletterUserUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: NewsletterUserUpsertInput;
  /** Unique document search */
  where: NewsletterUserWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type NewsletterUserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type NewsletterUserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterUserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterUserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterUserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is empty */
  discountCodes_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Matches if the union contains at least one connection to the provided item to the filter */
  discountCodes_some?: InputMaybe<NewsletterUserDiscountCodesWhereInput>;
  documentInStages_every?: InputMaybe<NewsletterUserWhereStageInput>;
  documentInStages_none?: InputMaybe<NewsletterUserWhereStageInput>;
  documentInStages_some?: InputMaybe<NewsletterUserWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type NewsletterUserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<NewsletterUserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<NewsletterUserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<NewsletterUserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<NewsletterUserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References NewsletterUser record uniquely */
export type NewsletterUserWhereUniqueInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars["ID"]["output"];
  /** The Stage of an object */
  stage: Stage;
};

export type Order = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Order>;
  email: Scalars["String"]["output"];
  /** List of Order versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  orderItems: Array<OrderItem>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  statusOrder: StatusOrder;
  stripeCheckoutId: Scalars["String"]["output"];
  total: Scalars["Int"]["output"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type OrderCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type OrderHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type OrderOrderItemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type OrderPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OrderUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
  statusOrder: StatusOrder;
  stripeCheckoutId: Scalars["String"]["input"];
  total: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type OrderCreateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Create and connect multiple existing Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
};

export type OrderCreateOneInlineInput = {
  /** Connect one existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
};

/** An edge in a connection. */
export type OrderEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Order;
};

export type OrderItem = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<OrderItem>;
  height: Scalars["Int"]["output"];
  /** List of OrderItem versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  order?: Maybe<Order>;
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  quantity: Scalars["Int"]["output"];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  total: Scalars["Int"]["output"];
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  width: Scalars["Int"]["output"];
};

export type OrderItemCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type OrderItemHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type OrderItemOrderArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemProductArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type OrderItemUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type OrderItemConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: OrderItemWhereUniqueInput;
};

/** A connection to a list of items. */
export type OrderItemConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<OrderItemEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type OrderItemCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  height: Scalars["Int"]["input"];
  order?: InputMaybe<OrderCreateOneInlineInput>;
  product?: InputMaybe<ProductCreateOneInlineInput>;
  quantity: Scalars["Int"]["input"];
  total: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width: Scalars["Int"]["input"];
};

export type OrderItemCreateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Create and connect multiple existing OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>;
};

export type OrderItemCreateOneInlineInput = {
  /** Connect one existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>;
};

/** An edge in a connection. */
export type OrderItemEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: OrderItem;
};

/** Identifies documents */
export type OrderItemManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderItemWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderItemWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderItemWhereStageInput>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  quantity_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  total_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export enum OrderItemOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  QuantityAsc = "quantity_ASC",
  QuantityDesc = "quantity_DESC",
  TotalAsc = "total_ASC",
  TotalDesc = "total_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type OrderItemUpdateInput = {
  height?: InputMaybe<Scalars["Int"]["input"]>;
  order?: InputMaybe<OrderUpdateOneInlineInput>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderItemUpdateManyInlineInput = {
  /** Connect multiple existing OrderItem documents */
  connect?: InputMaybe<Array<OrderItemConnectInput>>;
  /** Create and connect multiple OrderItem documents */
  create?: InputMaybe<Array<OrderItemCreateInput>>;
  /** Delete multiple OrderItem documents */
  delete?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Disconnect multiple OrderItem documents */
  disconnect?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing OrderItem documents */
  set?: InputMaybe<Array<OrderItemWhereUniqueInput>>;
  /** Update multiple OrderItem documents */
  update?: InputMaybe<Array<OrderItemUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple OrderItem documents */
  upsert?: InputMaybe<Array<OrderItemUpsertWithNestedWhereUniqueInput>>;
};

export type OrderItemUpdateManyInput = {
  height?: InputMaybe<Scalars["Int"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderItemUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderItemUpdateManyInput;
  /** Document search */
  where: OrderItemWhereInput;
};

export type OrderItemUpdateOneInlineInput = {
  /** Connect existing OrderItem document */
  connect?: InputMaybe<OrderItemWhereUniqueInput>;
  /** Create and connect one OrderItem document */
  create?: InputMaybe<OrderItemCreateInput>;
  /** Delete currently connected OrderItem document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected OrderItem document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single OrderItem document */
  update?: InputMaybe<OrderItemUpdateWithNestedWhereUniqueInput>;
  /** Upsert single OrderItem document */
  upsert?: InputMaybe<OrderItemUpsertWithNestedWhereUniqueInput>;
};

export type OrderItemUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderItemUpdateInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

export type OrderItemUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderItemCreateInput;
  /** Update document if it exists */
  update: OrderItemUpdateInput;
};

export type OrderItemUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderItemUpsertInput;
  /** Unique document search */
  where: OrderItemWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrderItemWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type OrderItemWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderItemWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderItemWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderItemWhereStageInput>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  order?: InputMaybe<OrderWhereInput>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  quantity_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  quantity_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  quantity_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  quantity_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  quantity_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  quantity_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  quantity_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  total_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrderItemWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderItemWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderItemWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderItemWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrderItemWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References OrderItem record uniquely */
export type OrderItemWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Identifies documents */
export type OrderManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  statusOrder?: InputMaybe<StatusOrder>;
  /** All values that are contained in given list. */
  statusOrder_in?: InputMaybe<Array<InputMaybe<StatusOrder>>>;
  /** Any other value that exists and is not equal to the given value. */
  statusOrder_not?: InputMaybe<StatusOrder>;
  /** All values that are not contained in given list. */
  statusOrder_not_in?: InputMaybe<Array<InputMaybe<StatusOrder>>>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Any other value that exists and is not equal to the given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  total_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum OrderOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusOrderAsc = "statusOrder_ASC",
  StatusOrderDesc = "statusOrder_DESC",
  StripeCheckoutIdAsc = "stripeCheckoutId_ASC",
  StripeCheckoutIdDesc = "stripeCheckoutId_DESC",
  TotalAsc = "total_ASC",
  TotalDesc = "total_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type OrderUpdateInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
  statusOrder?: InputMaybe<StatusOrder>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderUpdateManyInlineInput = {
  /** Connect multiple existing Order documents */
  connect?: InputMaybe<Array<OrderConnectInput>>;
  /** Create and connect multiple Order documents */
  create?: InputMaybe<Array<OrderCreateInput>>;
  /** Delete multiple Order documents */
  delete?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Disconnect multiple Order documents */
  disconnect?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Order documents */
  set?: InputMaybe<Array<OrderWhereUniqueInput>>;
  /** Update multiple Order documents */
  update?: InputMaybe<Array<OrderUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Order documents */
  upsert?: InputMaybe<Array<OrderUpsertWithNestedWhereUniqueInput>>;
};

export type OrderUpdateManyInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  statusOrder?: InputMaybe<StatusOrder>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
};

export type OrderUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: OrderUpdateManyInput;
  /** Document search */
  where: OrderWhereInput;
};

export type OrderUpdateOneInlineInput = {
  /** Connect existing Order document */
  connect?: InputMaybe<OrderWhereUniqueInput>;
  /** Create and connect one Order document */
  create?: InputMaybe<OrderCreateInput>;
  /** Delete currently connected Order document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Order document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Order document */
  update?: InputMaybe<OrderUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Order document */
  upsert?: InputMaybe<OrderUpsertWithNestedWhereUniqueInput>;
};

export type OrderUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: OrderUpdateInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

export type OrderUpsertInput = {
  /** Create document if it didn't exist */
  create: OrderCreateInput;
  /** Update document if it exists */
  update: OrderUpdateInput;
};

export type OrderUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: OrderUpsertInput;
  /** Unique document search */
  where: OrderWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type OrderWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type OrderWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<OrderWhereStageInput>;
  documentInStages_none?: InputMaybe<OrderWhereStageInput>;
  documentInStages_some?: InputMaybe<OrderWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  statusOrder?: InputMaybe<StatusOrder>;
  /** All values that are contained in given list. */
  statusOrder_in?: InputMaybe<Array<InputMaybe<StatusOrder>>>;
  /** Any other value that exists and is not equal to the given value. */
  statusOrder_not?: InputMaybe<StatusOrder>;
  /** All values that are not contained in given list. */
  statusOrder_not_in?: InputMaybe<Array<InputMaybe<StatusOrder>>>;
  stripeCheckoutId?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  stripeCheckoutId_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  stripeCheckoutId_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  stripeCheckoutId_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** Any other value that exists and is not equal to the given value. */
  stripeCheckoutId_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  stripeCheckoutId_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  stripeCheckoutId_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  stripeCheckoutId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  stripeCheckoutId_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  stripeCheckoutId_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  total?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  total_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  total_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  total_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  total_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  total_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  total_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  total_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type OrderWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<OrderWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<OrderWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<OrderWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<OrderWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Order record uniquely */
export type OrderWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export enum Orientation {
  Horizontal = "Horizontal",
  Vertical = "Vertical",
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars["Int"]["output"]>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Product = Node & {
  categories: Array<Category>;
  color: Scalars["String"]["output"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  description: Scalars["String"]["output"];
  /** Get the document in other stages */
  documentInStages: Array<Product>;
  finish: Scalars["String"]["output"];
  /** List of Product versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  images: Array<Asset>;
  /** System Locale field */
  locale: Locale;
  /** Get the other localizations for this document */
  localizations: Array<Product>;
  name: Scalars["String"]["output"];
  orderItems: Array<OrderItem>;
  orientation: Orientation;
  paperWeight: Scalars["Int"]["output"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  reviews: Array<Review>;
  sale?: Maybe<Scalars["String"]["output"]>;
  scheduledIn: Array<ScheduledOperation>;
  slug: Scalars["String"]["output"];
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  variants: Array<ProductVariantType>;
  whiteFrame: Scalars["Boolean"]["output"];
};

export type ProductCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CategoryWhereInput>;
};

export type ProductCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type ProductHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type ProductImagesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AssetWhereInput>;
};

export type ProductLocalizationsArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  locales?: Array<Locale>;
};

export type ProductOrderItemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type ProductPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductReviewsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ReviewWhereInput>;
};

export type ProductScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ProductUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation;
};

export type ProductUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductVariantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductVariantTypeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductVariantTypeWhereInput>;
};

export type ProductConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductCreateInput = {
  categories?: InputMaybe<CategoryCreateManyInlineInput>;
  color: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** description input for default locale (en) */
  description: Scalars["String"]["input"];
  finish: Scalars["String"]["input"];
  images?: InputMaybe<AssetCreateManyInlineInput>;
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<ProductCreateLocalizationsInput>;
  /** name input for default locale (en) */
  name: Scalars["String"]["input"];
  orderItems?: InputMaybe<OrderItemCreateManyInlineInput>;
  orientation: Orientation;
  paperWeight: Scalars["Int"]["input"];
  reviews?: InputMaybe<ReviewCreateManyInlineInput>;
  sale?: InputMaybe<Scalars["String"]["input"]>;
  slug: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  variants?: InputMaybe<ProductVariantTypeCreateManyInlineInput>;
  whiteFrame: Scalars["Boolean"]["input"];
};

export type ProductCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ProductCreateLocalizationInput = {
  /** Localization input */
  data: ProductCreateLocalizationDataInput;
  locale: Locale;
};

export type ProductCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
};

export type ProductCreateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Create and connect multiple existing Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
};

export type ProductCreateOneInlineInput = {
  /** Connect one existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
};

/** An edge in a connection. */
export type ProductEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Product;
};

/** Identifies documents */
export type ProductManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  color_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  color_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  color_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  color_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  color_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  color_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  color_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  color_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  finish?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  finish_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  finish_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  finish_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  finish_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  finish_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  finish_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  finish_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  finish_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  finish_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  orientation?: InputMaybe<Orientation>;
  /** All values that are contained in given list. */
  orientation_in?: InputMaybe<Array<InputMaybe<Orientation>>>;
  /** Any other value that exists and is not equal to the given value. */
  orientation_not?: InputMaybe<Orientation>;
  /** All values that are not contained in given list. */
  orientation_not_in?: InputMaybe<Array<InputMaybe<Orientation>>>;
  paperWeight?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  paperWeight_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  paperWeight_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  paperWeight_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  paperWeight_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  paperWeight_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  paperWeight_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  paperWeight_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  sale?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  sale_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  sale_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  sale_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  sale_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  sale_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  sale_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  sale_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  sale_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  sale_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  variants_every?: InputMaybe<ProductVariantTypeWhereInput>;
  variants_none?: InputMaybe<ProductVariantTypeWhereInput>;
  variants_some?: InputMaybe<ProductVariantTypeWhereInput>;
  whiteFrame?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  whiteFrame_not?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum ProductOrderByInput {
  ColorAsc = "color_ASC",
  ColorDesc = "color_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  FinishAsc = "finish_ASC",
  FinishDesc = "finish_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  OrientationAsc = "orientation_ASC",
  OrientationDesc = "orientation_DESC",
  PaperWeightAsc = "paperWeight_ASC",
  PaperWeightDesc = "paperWeight_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  SaleAsc = "sale_ASC",
  SaleDesc = "sale_DESC",
  SlugAsc = "slug_ASC",
  SlugDesc = "slug_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WhiteFrameAsc = "whiteFrame_ASC",
  WhiteFrameDesc = "whiteFrame_DESC",
}

export type ProductUpdateInput = {
  categories?: InputMaybe<CategoryUpdateManyInlineInput>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]["input"]>;
  finish?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<AssetUpdateManyInlineInput>;
  /** Manage document localizations */
  localizations?: InputMaybe<ProductUpdateLocalizationsInput>;
  /** name input for default locale (en) */
  name?: InputMaybe<Scalars["String"]["input"]>;
  orderItems?: InputMaybe<OrderItemUpdateManyInlineInput>;
  orientation?: InputMaybe<Orientation>;
  paperWeight?: InputMaybe<Scalars["Int"]["input"]>;
  reviews?: InputMaybe<ReviewUpdateManyInlineInput>;
  sale?: InputMaybe<Scalars["String"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  variants?: InputMaybe<ProductVariantTypeUpdateManyInlineInput>;
  whiteFrame?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProductUpdateLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateLocalizationInput = {
  data: ProductUpdateLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<ProductCreateLocalizationInput>>;
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>;
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateLocalizationInput>>;
  upsert?: InputMaybe<Array<ProductUpsertLocalizationInput>>;
};

export type ProductUpdateManyInlineInput = {
  /** Connect multiple existing Product documents */
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Create and connect multiple Product documents */
  create?: InputMaybe<Array<ProductCreateInput>>;
  /** Delete multiple Product documents */
  delete?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Disconnect multiple Product documents */
  disconnect?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Product documents */
  set?: InputMaybe<Array<ProductWhereUniqueInput>>;
  /** Update multiple Product documents */
  update?: InputMaybe<Array<ProductUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Product documents */
  upsert?: InputMaybe<Array<ProductUpsertWithNestedWhereUniqueInput>>;
};

export type ProductUpdateManyInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** description input for default locale (en) */
  description?: InputMaybe<Scalars["String"]["input"]>;
  finish?: InputMaybe<Scalars["String"]["input"]>;
  /** Optional updates to localizations */
  localizations?: InputMaybe<ProductUpdateManyLocalizationsInput>;
  orientation?: InputMaybe<Orientation>;
  paperWeight?: InputMaybe<Scalars["Int"]["input"]>;
  sale?: InputMaybe<Scalars["String"]["input"]>;
  whiteFrame?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ProductUpdateManyLocalizationDataInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductUpdateManyLocalizationInput = {
  data: ProductUpdateManyLocalizationDataInput;
  locale: Locale;
};

export type ProductUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<ProductUpdateManyLocalizationInput>>;
};

export type ProductUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductUpdateManyInput;
  /** Document search */
  where: ProductWhereInput;
};

export type ProductUpdateOneInlineInput = {
  /** Connect existing Product document */
  connect?: InputMaybe<ProductWhereUniqueInput>;
  /** Create and connect one Product document */
  create?: InputMaybe<ProductCreateInput>;
  /** Delete currently connected Product document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Product document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Product document */
  update?: InputMaybe<ProductUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Product document */
  upsert?: InputMaybe<ProductUpsertWithNestedWhereUniqueInput>;
};

export type ProductUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductUpdateInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

export type ProductUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductCreateInput;
  /** Update document if it exists */
  update: ProductUpdateInput;
};

export type ProductUpsertLocalizationInput = {
  create: ProductCreateLocalizationDataInput;
  locale: Locale;
  update: ProductUpdateLocalizationDataInput;
};

export type ProductUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductUpsertInput;
  /** Unique document search */
  where: ProductWhereUniqueInput;
};

/** Type layout vertical or horizontal */
export type ProductVariantType = Node & {
  available: Scalars["Int"]["output"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  currency?: Maybe<ProductVariantTypeCurrency>;
  /** Get the document in other stages */
  documentInStages: Array<ProductVariantType>;
  height: Scalars["Int"]["output"];
  /** List of ProductVariantType versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  price: Scalars["Int"]["output"];
  products: Array<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
  width: Scalars["Int"]["output"];
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeCurrencyArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Type layout vertical or horizontal */
export type ProductVariantTypeUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ProductVariantTypeConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ProductVariantTypeWhereUniqueInput;
};

/** A connection to a list of items. */
export type ProductVariantTypeConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ProductVariantTypeEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ProductVariantTypeCreateInput = {
  available: Scalars["Int"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  currency?: InputMaybe<ProductVariantTypeCurrencyCreateOneInlineInput>;
  height: Scalars["Int"]["input"];
  price: Scalars["Int"]["input"];
  products?: InputMaybe<ProductCreateManyInlineInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  width: Scalars["Int"]["input"];
};

export type ProductVariantTypeCreateManyInlineInput = {
  /** Connect multiple existing ProductVariantType documents */
  connect?: InputMaybe<Array<ProductVariantTypeWhereUniqueInput>>;
  /** Create and connect multiple existing ProductVariantType documents */
  create?: InputMaybe<Array<ProductVariantTypeCreateInput>>;
};

export type ProductVariantTypeCreateOneInlineInput = {
  /** Connect one existing ProductVariantType document */
  connect?: InputMaybe<ProductVariantTypeWhereUniqueInput>;
  /** Create and connect one ProductVariantType document */
  create?: InputMaybe<ProductVariantTypeCreateInput>;
};

export type ProductVariantTypeCurrency = Currency;

export type ProductVariantTypeCurrencyConnectInput = {
  Currency?: InputMaybe<CurrencyConnectInput>;
};

export type ProductVariantTypeCurrencyCreateInput = {
  Currency?: InputMaybe<CurrencyCreateInput>;
};

export type ProductVariantTypeCurrencyCreateManyInlineInput = {
  /** Connect multiple existing ProductVariantTypeCurrency documents */
  connect?: InputMaybe<Array<ProductVariantTypeCurrencyWhereUniqueInput>>;
  /** Create and connect multiple existing ProductVariantTypeCurrency documents */
  create?: InputMaybe<Array<ProductVariantTypeCurrencyCreateInput>>;
};

export type ProductVariantTypeCurrencyCreateOneInlineInput = {
  /** Connect one existing ProductVariantTypeCurrency document */
  connect?: InputMaybe<ProductVariantTypeCurrencyWhereUniqueInput>;
  /** Create and connect one ProductVariantTypeCurrency document */
  create?: InputMaybe<ProductVariantTypeCurrencyCreateInput>;
};

export type ProductVariantTypeCurrencyUpdateInput = {
  Currency?: InputMaybe<CurrencyUpdateInput>;
};

export type ProductVariantTypeCurrencyUpdateManyInlineInput = {
  /** Connect multiple existing ProductVariantTypeCurrency documents */
  connect?: InputMaybe<Array<ProductVariantTypeCurrencyConnectInput>>;
  /** Create and connect multiple ProductVariantTypeCurrency documents */
  create?: InputMaybe<Array<ProductVariantTypeCurrencyCreateInput>>;
  /** Delete multiple ProductVariantTypeCurrency documents */
  delete?: InputMaybe<Array<ProductVariantTypeCurrencyWhereUniqueInput>>;
  /** Disconnect multiple ProductVariantTypeCurrency documents */
  disconnect?: InputMaybe<Array<ProductVariantTypeCurrencyWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductVariantTypeCurrency documents */
  set?: InputMaybe<Array<ProductVariantTypeCurrencyWhereUniqueInput>>;
  /** Update multiple ProductVariantTypeCurrency documents */
  update?: InputMaybe<
    Array<ProductVariantTypeCurrencyUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple ProductVariantTypeCurrency documents */
  upsert?: InputMaybe<
    Array<ProductVariantTypeCurrencyUpsertWithNestedWhereUniqueInput>
  >;
};

export type ProductVariantTypeCurrencyUpdateManyWithNestedWhereInput = {
  Currency?: InputMaybe<CurrencyUpdateManyWithNestedWhereInput>;
};

export type ProductVariantTypeCurrencyUpdateOneInlineInput = {
  /** Connect existing ProductVariantTypeCurrency document */
  connect?: InputMaybe<ProductVariantTypeCurrencyWhereUniqueInput>;
  /** Create and connect one ProductVariantTypeCurrency document */
  create?: InputMaybe<ProductVariantTypeCurrencyCreateInput>;
  /** Delete currently connected ProductVariantTypeCurrency document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ProductVariantTypeCurrency document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ProductVariantTypeCurrency document */
  update?: InputMaybe<ProductVariantTypeCurrencyUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductVariantTypeCurrency document */
  upsert?: InputMaybe<ProductVariantTypeCurrencyUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantTypeCurrencyUpdateWithNestedWhereUniqueInput = {
  Currency?: InputMaybe<CurrencyUpdateWithNestedWhereUniqueInput>;
};

export type ProductVariantTypeCurrencyUpsertWithNestedWhereUniqueInput = {
  Currency?: InputMaybe<CurrencyUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantTypeCurrencyWhereInput = {
  Currency?: InputMaybe<CurrencyWhereInput>;
};

export type ProductVariantTypeCurrencyWhereUniqueInput = {
  Currency?: InputMaybe<CurrencyWhereUniqueInput>;
};

/** An edge in a connection. */
export type ProductVariantTypeEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ProductVariantType;
};

/** Identifies documents */
export type ProductVariantTypeManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductVariantTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductVariantTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductVariantTypeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  available?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  available_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  available_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  available_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  available_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  available_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  available_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  available_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is connected to the given models */
  currency?: InputMaybe<ProductVariantTypeCurrencyWhereInput>;
  /** All values in which the union is empty */
  currency_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  documentInStages_every?: InputMaybe<ProductVariantTypeWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductVariantTypeWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductVariantTypeWhereStageInput>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export enum ProductVariantTypeOrderByInput {
  AvailableAsc = "available_ASC",
  AvailableDesc = "available_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  HeightAsc = "height_ASC",
  HeightDesc = "height_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PriceAsc = "price_ASC",
  PriceDesc = "price_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
  WidthAsc = "width_ASC",
  WidthDesc = "width_DESC",
}

export type ProductVariantTypeUpdateInput = {
  available?: InputMaybe<Scalars["Int"]["input"]>;
  currency?: InputMaybe<ProductVariantTypeCurrencyUpdateOneInlineInput>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  products?: InputMaybe<ProductUpdateManyInlineInput>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductVariantTypeUpdateManyInlineInput = {
  /** Connect multiple existing ProductVariantType documents */
  connect?: InputMaybe<Array<ProductVariantTypeConnectInput>>;
  /** Create and connect multiple ProductVariantType documents */
  create?: InputMaybe<Array<ProductVariantTypeCreateInput>>;
  /** Delete multiple ProductVariantType documents */
  delete?: InputMaybe<Array<ProductVariantTypeWhereUniqueInput>>;
  /** Disconnect multiple ProductVariantType documents */
  disconnect?: InputMaybe<Array<ProductVariantTypeWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ProductVariantType documents */
  set?: InputMaybe<Array<ProductVariantTypeWhereUniqueInput>>;
  /** Update multiple ProductVariantType documents */
  update?: InputMaybe<
    Array<ProductVariantTypeUpdateWithNestedWhereUniqueInput>
  >;
  /** Upsert multiple ProductVariantType documents */
  upsert?: InputMaybe<
    Array<ProductVariantTypeUpsertWithNestedWhereUniqueInput>
  >;
};

export type ProductVariantTypeUpdateManyInput = {
  available?: InputMaybe<Scalars["Int"]["input"]>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ProductVariantTypeUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProductVariantTypeUpdateManyInput;
  /** Document search */
  where: ProductVariantTypeWhereInput;
};

export type ProductVariantTypeUpdateOneInlineInput = {
  /** Connect existing ProductVariantType document */
  connect?: InputMaybe<ProductVariantTypeWhereUniqueInput>;
  /** Create and connect one ProductVariantType document */
  create?: InputMaybe<ProductVariantTypeCreateInput>;
  /** Delete currently connected ProductVariantType document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ProductVariantType document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ProductVariantType document */
  update?: InputMaybe<ProductVariantTypeUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ProductVariantType document */
  upsert?: InputMaybe<ProductVariantTypeUpsertWithNestedWhereUniqueInput>;
};

export type ProductVariantTypeUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProductVariantTypeUpdateInput;
  /** Unique document search */
  where: ProductVariantTypeWhereUniqueInput;
};

export type ProductVariantTypeUpsertInput = {
  /** Create document if it didn't exist */
  create: ProductVariantTypeCreateInput;
  /** Update document if it exists */
  update: ProductVariantTypeUpdateInput;
};

export type ProductVariantTypeUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProductVariantTypeUpsertInput;
  /** Unique document search */
  where: ProductVariantTypeWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductVariantTypeWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProductVariantTypeWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductVariantTypeWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductVariantTypeWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductVariantTypeWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  available?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  available_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  available_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  available_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  available_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  available_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  available_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  available_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  /** All values in which the union is connected to the given models */
  currency?: InputMaybe<ProductVariantTypeCurrencyWhereInput>;
  /** All values in which the union is empty */
  currency_empty?: InputMaybe<Scalars["Boolean"]["input"]>;
  documentInStages_every?: InputMaybe<ProductVariantTypeWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductVariantTypeWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductVariantTypeWhereStageInput>;
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  price?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  price_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  price_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  price_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  price_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  price_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  price_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  products_every?: InputMaybe<ProductWhereInput>;
  products_none?: InputMaybe<ProductWhereInput>;
  products_some?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  width?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductVariantTypeWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductVariantTypeWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductVariantTypeWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductVariantTypeWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductVariantTypeWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References ProductVariantType record uniquely */
export type ProductVariantTypeWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** This contains a set of filters that can be used to compare values internally */
export type ProductWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ProductWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  categories_every?: InputMaybe<CategoryWhereInput>;
  categories_none?: InputMaybe<CategoryWhereInput>;
  categories_some?: InputMaybe<CategoryWhereInput>;
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  color_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  color_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  color_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  color_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  color_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  color_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  color_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  color_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  color_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  documentInStages_every?: InputMaybe<ProductWhereStageInput>;
  documentInStages_none?: InputMaybe<ProductWhereStageInput>;
  documentInStages_some?: InputMaybe<ProductWhereStageInput>;
  finish?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  finish_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  finish_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  finish_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  finish_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  finish_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  finish_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  finish_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  finish_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  finish_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  images_every?: InputMaybe<AssetWhereInput>;
  images_none?: InputMaybe<AssetWhereInput>;
  images_some?: InputMaybe<AssetWhereInput>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  orderItems_every?: InputMaybe<OrderItemWhereInput>;
  orderItems_none?: InputMaybe<OrderItemWhereInput>;
  orderItems_some?: InputMaybe<OrderItemWhereInput>;
  orientation?: InputMaybe<Orientation>;
  /** All values that are contained in given list. */
  orientation_in?: InputMaybe<Array<InputMaybe<Orientation>>>;
  /** Any other value that exists and is not equal to the given value. */
  orientation_not?: InputMaybe<Orientation>;
  /** All values that are not contained in given list. */
  orientation_not_in?: InputMaybe<Array<InputMaybe<Orientation>>>;
  paperWeight?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  paperWeight_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  paperWeight_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  paperWeight_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  paperWeight_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  paperWeight_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  paperWeight_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  paperWeight_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  reviews_every?: InputMaybe<ReviewWhereInput>;
  reviews_none?: InputMaybe<ReviewWhereInput>;
  reviews_some?: InputMaybe<ReviewWhereInput>;
  sale?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  sale_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  sale_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  sale_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  sale_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  sale_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  sale_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  sale_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  sale_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  sale_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
  variants_every?: InputMaybe<ProductVariantTypeWhereInput>;
  variants_none?: InputMaybe<ProductVariantTypeWhereInput>;
  variants_some?: InputMaybe<ProductVariantTypeWhereInput>;
  whiteFrame?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  whiteFrame_not?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProductWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProductWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProductWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProductWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Product record uniquely */
export type ProductWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
  slug?: InputMaybe<Scalars["String"]["input"]>;
};

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale;
  /** Stages to publish selected locales to */
  stages: Array<Stage>;
};

export type Query = {
  /** Retrieve a single account */
  account?: Maybe<Account>;
  /** Retrieve document version */
  accountVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple accounts */
  accounts: Array<Account>;
  /** Retrieve multiple accounts using the Relay connection interface */
  accountsConnection: AccountConnection;
  /** Retrieve a single asset */
  asset?: Maybe<Asset>;
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple assets */
  assets: Array<Asset>;
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection;
  /** Retrieve multiple categories */
  categories: Array<Category>;
  /** Retrieve multiple categories using the Relay connection interface */
  categoriesConnection: CategoryConnection;
  /** Retrieve a single category */
  category?: Maybe<Category>;
  /** Retrieve document version */
  categoryVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple currencies */
  currencies: Array<Currency>;
  /** Retrieve multiple currencies using the Relay connection interface */
  currenciesConnection: CurrencyConnection;
  /** Retrieve a single currency */
  currency?: Maybe<Currency>;
  /** Retrieve document version */
  currencyVersion?: Maybe<DocumentVersion>;
  /** Retrieve a single discountCode */
  discountCode?: Maybe<DiscountCode>;
  /** Retrieve document version */
  discountCodeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple discountCodes */
  discountCodes: Array<DiscountCode>;
  /** Retrieve multiple discountCodes using the Relay connection interface */
  discountCodesConnection: DiscountCodeConnection;
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>;
  /** Retrieve a single newsletterUser */
  newsletterUser?: Maybe<NewsletterUser>;
  /** Retrieve document version */
  newsletterUserVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple newsletterUsers */
  newsletterUsers: Array<NewsletterUser>;
  /** Retrieve multiple newsletterUsers using the Relay connection interface */
  newsletterUsersConnection: NewsletterUserConnection;
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** Retrieve a single order */
  order?: Maybe<Order>;
  /** Retrieve a single orderItem */
  orderItem?: Maybe<OrderItem>;
  /** Retrieve document version */
  orderItemVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orderItems */
  orderItems: Array<OrderItem>;
  /** Retrieve multiple orderItems using the Relay connection interface */
  orderItemsConnection: OrderItemConnection;
  /** Retrieve document version */
  orderVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple orders */
  orders: Array<Order>;
  /** Retrieve multiple orders using the Relay connection interface */
  ordersConnection: OrderConnection;
  /** Retrieve a single product */
  product?: Maybe<Product>;
  /** Retrieve a single productVariantType */
  productVariantType?: Maybe<ProductVariantType>;
  /** Retrieve document version */
  productVariantTypeVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple productVariantTypes */
  productVariantTypes: Array<ProductVariantType>;
  /** Retrieve multiple productVariantTypes using the Relay connection interface */
  productVariantTypesConnection: ProductVariantTypeConnection;
  /** Retrieve document version */
  productVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple products */
  products: Array<Product>;
  /** Retrieve multiple products using the Relay connection interface */
  productsConnection: ProductConnection;
  /** Retrieve a single review */
  review?: Maybe<Review>;
  /** Retrieve document version */
  reviewVersion?: Maybe<DocumentVersion>;
  /** Retrieve multiple reviews */
  reviews: Array<Review>;
  /** Retrieve multiple reviews using the Relay connection interface */
  reviewsConnection: ReviewConnection;
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>;
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection;
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>;
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection;
  /** Retrieve a single user */
  user?: Maybe<User>;
  /** Retrieve multiple users */
  users: Array<User>;
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection;
};

export type QueryAccountArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AccountWhereUniqueInput;
};

export type QueryAccountVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAccountsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AccountOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAccountsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AccountOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AccountWhereInput>;
};

export type QueryAssetArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: AssetWhereUniqueInput;
};

export type QueryAssetVersionArgs = {
  where: VersionWhereInput;
};

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<AssetOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<AssetWhereInput>;
};

export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CategoryOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CategoryWhereInput>;
};

export type QueryCategoryArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CategoryWhereUniqueInput;
};

export type QueryCategoryVersionArgs = {
  where: VersionWhereInput;
};

export type QueryCurrenciesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrencyOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type QueryCurrenciesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<CurrencyOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<CurrencyWhereInput>;
};

export type QueryCurrencyArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: CurrencyWhereUniqueInput;
};

export type QueryCurrencyVersionArgs = {
  where: VersionWhereInput;
};

export type QueryDiscountCodeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: DiscountCodeWhereUniqueInput;
};

export type QueryDiscountCodeVersionArgs = {
  where: VersionWhereInput;
};

export type QueryDiscountCodesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DiscountCodeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<DiscountCodeWhereInput>;
};

export type QueryDiscountCodesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<DiscountCodeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<DiscountCodeWhereInput>;
};

export type QueryEntitiesArgs = {
  where: Array<EntityWhereInput>;
};

export type QueryNewsletterUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: NewsletterUserWhereUniqueInput;
};

export type QueryNewsletterUserVersionArgs = {
  where: VersionWhereInput;
};

export type QueryNewsletterUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterUserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<NewsletterUserWhereInput>;
};

export type QueryNewsletterUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<NewsletterUserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<NewsletterUserWhereInput>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
  locales?: Array<Locale>;
  stage?: Stage;
};

export type QueryOrderArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderWhereUniqueInput;
};

export type QueryOrderItemArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: OrderItemWhereUniqueInput;
};

export type QueryOrderItemVersionArgs = {
  where: VersionWhereInput;
};

export type QueryOrderItemsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryOrderItemsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderItemOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<OrderItemWhereInput>;
};

export type QueryOrderVersionArgs = {
  where: VersionWhereInput;
};

export type QueryOrdersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryOrdersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<OrderOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryProductArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductWhereUniqueInput;
};

export type QueryProductVariantTypeArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ProductVariantTypeWhereUniqueInput;
};

export type QueryProductVariantTypeVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProductVariantTypesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductVariantTypeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProductVariantTypeWhereInput>;
};

export type QueryProductVariantTypesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductVariantTypeOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProductVariantTypeWhereInput>;
};

export type QueryProductVersionArgs = {
  where: VersionWhereInput;
};

export type QueryProductsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ProductOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ProductWhereInput>;
};

export type QueryReviewArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ReviewWhereUniqueInput;
};

export type QueryReviewVersionArgs = {
  where: VersionWhereInput;
};

export type QueryReviewsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};

export type QueryReviewsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ReviewOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ReviewWhereInput>;
};

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledOperationWhereUniqueInput;
};

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: ScheduledReleaseWhereUniqueInput;
};

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<ScheduledReleaseWhereInput>;
};

export type QueryUserArgs = {
  locales?: Array<Locale>;
  stage?: Stage;
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: Array<Locale>;
  orderBy?: InputMaybe<UserOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  stage?: Stage;
  where?: InputMaybe<UserWhereInput>;
};

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  a: Scalars["RGBATransparency"]["output"];
  b: Scalars["RGBAHue"]["output"];
  g: Scalars["RGBAHue"]["output"];
  r: Scalars["RGBAHue"]["output"];
};

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars["RGBATransparency"]["input"];
  b: Scalars["RGBAHue"]["input"];
  g: Scalars["RGBAHue"]["input"];
  r: Scalars["RGBAHue"]["input"];
};

export type Review = Node & {
  content: Scalars["String"]["output"];
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Get the document in other stages */
  documentInStages: Array<Review>;
  email: Scalars["String"]["output"];
  /** List of Review versions */
  history: Array<Version>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  product?: Maybe<Product>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  rating: Scalars["Int"]["output"];
  scheduledIn: Array<ScheduledOperation>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

export type ReviewCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type ReviewHistoryArgs = {
  limit?: Scalars["Int"]["input"];
  skip?: Scalars["Int"]["input"];
  stageOverride?: InputMaybe<Stage>;
};

export type ReviewProductArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewScheduledInArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

export type ReviewUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ReviewConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ReviewWhereUniqueInput;
};

/** A connection to a list of items. */
export type ReviewConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ReviewEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ReviewCreateInput = {
  content: Scalars["String"]["input"];
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  product?: InputMaybe<ProductCreateOneInlineInput>;
  rating: Scalars["Int"]["input"];
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ReviewCreateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Create and connect multiple existing Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
};

export type ReviewCreateOneInlineInput = {
  /** Connect one existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
};

/** An edge in a connection. */
export type ReviewEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: Review;
};

/** Identifies documents */
export type ReviewManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ReviewOrderByInput {
  ContentAsc = "content_ASC",
  ContentDesc = "content_DESC",
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  EmailAsc = "email_ASC",
  EmailDesc = "email_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  RatingAsc = "rating_ASC",
  RatingDesc = "rating_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type ReviewUpdateInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductUpdateOneInlineInput>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReviewUpdateManyInlineInput = {
  /** Connect multiple existing Review documents */
  connect?: InputMaybe<Array<ReviewConnectInput>>;
  /** Create and connect multiple Review documents */
  create?: InputMaybe<Array<ReviewCreateInput>>;
  /** Delete multiple Review documents */
  delete?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Disconnect multiple Review documents */
  disconnect?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing Review documents */
  set?: InputMaybe<Array<ReviewWhereUniqueInput>>;
  /** Update multiple Review documents */
  update?: InputMaybe<Array<ReviewUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple Review documents */
  upsert?: InputMaybe<Array<ReviewUpsertWithNestedWhereUniqueInput>>;
};

export type ReviewUpdateManyInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ReviewUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ReviewUpdateManyInput;
  /** Document search */
  where: ReviewWhereInput;
};

export type ReviewUpdateOneInlineInput = {
  /** Connect existing Review document */
  connect?: InputMaybe<ReviewWhereUniqueInput>;
  /** Create and connect one Review document */
  create?: InputMaybe<ReviewCreateInput>;
  /** Delete currently connected Review document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected Review document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single Review document */
  update?: InputMaybe<ReviewUpdateWithNestedWhereUniqueInput>;
  /** Upsert single Review document */
  upsert?: InputMaybe<ReviewUpsertWithNestedWhereUniqueInput>;
};

export type ReviewUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ReviewUpdateInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

export type ReviewUpsertInput = {
  /** Create document if it didn't exist */
  create: ReviewCreateInput;
  /** Update document if it exists */
  update: ReviewUpdateInput;
};

export type ReviewUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ReviewUpsertInput;
  /** Unique document search */
  where: ReviewWhereUniqueInput;
};

/** This contains a set of filters that can be used to compare values internally */
export type ReviewWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ReviewWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  content_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  content_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  content_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  content_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  content_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  content_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  content_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  content_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  content_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  documentInStages_every?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_none?: InputMaybe<ReviewWhereStageInput>;
  documentInStages_some?: InputMaybe<ReviewWhereStageInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  email_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  email_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  email_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  email_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  email_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  email_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  email_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  email_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  rating?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than the given value. */
  rating_gt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values greater than or equal the given value. */
  rating_gte?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are contained in given list. */
  rating_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  /** All values less than the given value. */
  rating_lt?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values less than or equal the given value. */
  rating_lte?: InputMaybe<Scalars["Int"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  rating_not?: InputMaybe<Scalars["Int"]["input"]>;
  /** All values that are not contained in given list. */
  rating_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>;
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ReviewWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ReviewWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ReviewWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References Review record uniquely */
export type ReviewWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  /** Returns HTMl representation */
  html: Scalars["String"]["output"];
  /** Returns Markdown representation */
  markdown: Scalars["String"]["output"];
  /** Returns AST representation */
  raw: Scalars["RichTextAST"]["output"];
  /** Returns plain-text contents of RichText */
  text: Scalars["String"]["output"];
};

/** Scheduled Operation system model */
export type ScheduledOperation = Node & {
  affectedDocuments: Array<ScheduledOperationAffectedDocument>;
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Operation description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledOperation>;
  /** Operation error message */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Raw operation payload including all details, this field is subject to change */
  rawPayload: Scalars["Json"]["output"];
  /** The release this operation is scheduled for */
  release?: Maybe<ScheduledRelease>;
  /** System stage field */
  stage: Stage;
  /** operation Status */
  status: ScheduledOperationStatus;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledOperationAffectedDocument =
  | Account
  | Asset
  | Category
  | Currency
  | DiscountCode
  | NewsletterUser
  | Order
  | OrderItem
  | Product
  | ProductVariantType
  | Review;

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
};

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ScheduledOperation;
};

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = "CANCELED",
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>;
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>;
};

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>;
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars["Json"]["input"]>;
  release?: InputMaybe<ScheduledReleaseWhereInput>;
  status?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Scheduled Release system model */
export type ScheduledRelease = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** User that created this document */
  createdBy?: Maybe<User>;
  /** Release description */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Get the document in other stages */
  documentInStages: Array<ScheduledRelease>;
  /** Release error message */
  errorMessage?: Maybe<Scalars["String"]["output"]>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** Whether scheduled release should be run */
  isActive: Scalars["Boolean"]["output"];
  /** Whether scheduled release is implicit */
  isImplicit: Scalars["Boolean"]["output"];
  /** Operations to run with this release */
  operations: Array<ScheduledOperation>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** User that last published this document */
  publishedBy?: Maybe<User>;
  /** Release date and time */
  releaseAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** System stage field */
  stage: Stage;
  /** Release Status */
  status: ScheduledReleaseStatus;
  /** Release Title */
  title?: Maybe<Scalars["String"]["output"]>;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
  /** User that last updated this document */
  updatedBy?: Maybe<User>;
};

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ScheduledOperationWhereInput>;
};

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars["Boolean"]["input"]>;
  locales?: InputMaybe<Array<Locale>>;
};

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput;
};

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
};

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
};

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: ScheduledRelease;
};

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  DescriptionAsc = "description_ASC",
  DescriptionDesc = "description_DESC",
  ErrorMessageAsc = "errorMessage_ASC",
  ErrorMessageDesc = "errorMessage_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  IsImplicitAsc = "isImplicit_ASC",
  IsImplicitDesc = "isImplicit_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  ReleaseAtAsc = "releaseAt_ASC",
  ReleaseAtDesc = "releaseAt_DESC",
  StatusAsc = "status_ASC",
  StatusDesc = "status_DESC",
  TitleAsc = "title_ASC",
  TitleDesc = "title_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  InProgress = "IN_PROGRESS",
  Pending = "PENDING",
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>;
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>;
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>;
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>;
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>;
};

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput;
  /** Document search */
  where: ScheduledReleaseWhereInput;
};

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>;
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>;
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>;
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>;
};

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput;
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput;
};

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput;
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput;
};

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  createdBy?: InputMaybe<UserWhereInput>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  errorMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  isImplicit?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  operations_every?: InputMaybe<ScheduledOperationWhereInput>;
  operations_none?: InputMaybe<ScheduledOperationWhereInput>;
  operations_some?: InputMaybe<ScheduledOperationWhereInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  publishedBy?: InputMaybe<UserWhereInput>;
  releaseAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  status?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>;
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedBy?: InputMaybe<UserWhereInput>;
};

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = "DRAFT",
  /** The Published stage is where you can publish your content to. */
  Published = "PUBLISHED",
}

export enum StatusOrder {
  Paid = "PAID",
  Progress = "PROGRESS",
  Received = "RECEIVED",
  Send = "SEND",
  Unpaid = "UNPAID",
}

export enum SystemDateTimeFieldVariation {
  Base = "BASE",
  Combined = "COMBINED",
  Localization = "LOCALIZATION",
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale;
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>;
};

/** User system model */
export type User = Node & {
  /** The time the document was created */
  createdAt: Scalars["DateTime"]["output"];
  /** Get the document in other stages */
  documentInStages: Array<User>;
  /** The unique identifier */
  id: Scalars["ID"]["output"];
  /** Flag to determine if user is active or not */
  isActive: Scalars["Boolean"]["output"];
  /** User Kind. Can be either MEMBER, PAT or PUBLIC */
  kind: UserKind;
  /** The username */
  name: Scalars["String"]["output"];
  /** Profile Picture url */
  picture?: Maybe<Scalars["String"]["output"]>;
  /** The time the document was published. Null on documents in draft stage. */
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** System stage field */
  stage: Stage;
  /** The time the document was updated */
  updatedAt: Scalars["DateTime"]["output"];
};

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars["Boolean"]["input"];
  inheritLocale?: Scalars["Boolean"]["input"];
  stages?: Array<Stage>;
};

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>;
  /** Document to connect */
  where: UserWhereUniqueInput;
};

/** A connection to a list of items. */
export type UserConnection = {
  aggregate: Aggregate;
  /** A list of edges. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge. */
  node: User;
};

/** System User Kind */
export enum UserKind {
  Member = "MEMBER",
  Pat = "PAT",
  Public = "PUBLIC",
  Webhook = "WEBHOOK",
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

export enum UserOrderByInput {
  CreatedAtAsc = "createdAt_ASC",
  CreatedAtDesc = "createdAt_DESC",
  IdAsc = "id_ASC",
  IdDesc = "id_DESC",
  IsActiveAsc = "isActive_ASC",
  IsActiveDesc = "isActive_DESC",
  KindAsc = "kind_ASC",
  KindDesc = "kind_DESC",
  NameAsc = "name_ASC",
  NameDesc = "name_DESC",
  PictureAsc = "picture_ASC",
  PictureDesc = "picture_DESC",
  PublishedAtAsc = "publishedAt_ASC",
  PublishedAtDesc = "publishedAt_DESC",
  UpdatedAtAsc = "updatedAt_ASC",
  UpdatedAtDesc = "updatedAt_DESC",
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>;
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
};

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>;
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>;
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars["String"]["input"]>;
  createdAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  documentInStages_every?: InputMaybe<UserWhereStageInput>;
  documentInStages_none?: InputMaybe<UserWhereStageInput>;
  documentInStages_some?: InputMaybe<UserWhereStageInput>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars["ID"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  kind?: InputMaybe<UserKind>;
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>;
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  picture?: InputMaybe<Scalars["String"]["input"]>;
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
  updatedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars["DateTime"]["input"]>>
  >;
};

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>;
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>;
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>;
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>;
};

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Version = {
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  revision: Scalars["Int"]["output"];
  stage: Stage;
};

export type VersionWhereInput = {
  id: Scalars["ID"]["input"];
  revision: Scalars["Int"]["input"];
  stage: Stage;
};

export enum _FilterKind {
  And = "AND",
  Not = "NOT",
  Or = "OR",
  Contains = "contains",
  ContainsAll = "contains_all",
  ContainsNone = "contains_none",
  ContainsSome = "contains_some",
  EndsWith = "ends_with",
  Eq = "eq",
  EqNot = "eq_not",
  Gt = "gt",
  Gte = "gte",
  In = "in",
  JsonPathExists = "json_path_exists",
  JsonValueRecursive = "json_value_recursive",
  Lt = "lt",
  Lte = "lte",
  NotContains = "not_contains",
  NotEndsWith = "not_ends_with",
  NotIn = "not_in",
  NotStartsWith = "not_starts_with",
  RelationalEvery = "relational_every",
  RelationalNone = "relational_none",
  RelationalSingle = "relational_single",
  RelationalSome = "relational_some",
  Search = "search",
  StartsWith = "starts_with",
  UnionEmpty = "union_empty",
  UnionEvery = "union_every",
  UnionNone = "union_none",
  UnionSingle = "union_single",
  UnionSome = "union_some",
}

export enum _MutationInputFieldKind {
  Enum = "enum",
  Relation = "relation",
  RichText = "richText",
  RichTextWithEmbeds = "richTextWithEmbeds",
  Scalar = "scalar",
  Union = "union",
  Virtual = "virtual",
}

export enum _MutationKind {
  Create = "create",
  Delete = "delete",
  DeleteMany = "deleteMany",
  Publish = "publish",
  PublishMany = "publishMany",
  SchedulePublish = "schedulePublish",
  ScheduleUnpublish = "scheduleUnpublish",
  Unpublish = "unpublish",
  UnpublishMany = "unpublishMany",
  Update = "update",
  UpdateMany = "updateMany",
  Upsert = "upsert",
}

export enum _OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum _RelationInputCardinality {
  Many = "many",
  One = "one",
}

export enum _RelationInputKind {
  Create = "create",
  Update = "update",
}

export enum _RelationKind {
  Regular = "regular",
  Union = "union",
}

export enum _SystemDateTimeFieldVariation {
  Base = "base",
  Combined = "combined",
  Localization = "localization",
}

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never }>;

export type GetCategoriesQuery = {
  categories: Array<{ id: string; name: string; slug: string }>;
};

export type CategoriesFragment = { id: string; name: string; slug: string };

export type ImagesFragment = { id: string; alt?: string | null; url: string };

export type ProductDisplayFragment = {
  sale?: string | null;
  id: string;
  name: string;
  slug: string;
  orientation: Orientation;
  whiteFrame: boolean;
  variants: Array<{ id: string; price: number; width: number; height: number }>;
  categories: Array<{ slug: string }>;
  images: Array<{ id: string; alt?: string | null; url: string }>;
};

export type ProductDetailsFragment = {
  id: string;
  name: string;
  description: string;
  paperWeight: number;
  orientation: Orientation;
  slug: string;
  color: string;
  sale?: string | null;
  whiteFrame: boolean;
  finish: string;
  variants: Array<{ id: string; width: number; height: number; price: number }>;
  categories: Array<{ id: string; name: string }>;
  images: Array<{ id: string; alt?: string | null; url: string }>;
};

export type ReviewProductFragment = {
  name: string;
  id: string;
  email: string;
  rating: number;
  content: string;
};

export type VariantFragment = {
  id: string;
  width: number;
  height: number;
  price: number;
};

export type CreateOrderMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  totalOrderPrice: Scalars["Int"]["input"];
  stripeCheckoutId: Scalars["String"]["input"];
  orderItems: OrderItemCreateManyInlineInput;
  statusOrder: StatusOrder;
}>;

export type CreateOrderMutation = { createOrder?: { id: string } | null };

export type UpdateOrderPaymentByIdMutationVariables = Exact<{
  orderId: Scalars["ID"]["input"];
}>;

export type UpdateOrderPaymentByIdMutation = {
  updateOrder?: { id: string } | null;
};

export type GetProductsToCarrouselQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetProductsToCarrouselQuery = {
  products: Array<{
    sale?: string | null;
    id: string;
    name: string;
    slug: string;
    orientation: Orientation;
    whiteFrame: boolean;
    variants: Array<{
      id: string;
      price: number;
      width: number;
      height: number;
    }>;
    categories: Array<{ slug: string }>;
    images: Array<{ id: string; alt?: string | null; url: string }>;
  }>;
};

export type GetProductsToCarrouselByCategorySlugWithoutProductQueryVariables =
  Exact<{
    categorySlug: Scalars["String"]["input"];
    productId: Scalars["ID"]["input"];
  }>;

export type GetProductsToCarrouselByCategorySlugWithoutProductQuery = {
  products: Array<{
    sale?: string | null;
    id: string;
    name: string;
    slug: string;
    orientation: Orientation;
    whiteFrame: boolean;
    variants: Array<{
      id: string;
      price: number;
      width: number;
      height: number;
    }>;
    categories: Array<{ slug: string }>;
    images: Array<{ id: string; alt?: string | null; url: string }>;
  }>;
};

export type GetProductsToCarrouselByCategorySlugQueryVariables = Exact<{
  categorySlug: Scalars["String"]["input"];
}>;

export type GetProductsToCarrouselByCategorySlugQuery = {
  products: Array<{
    sale?: string | null;
    id: string;
    name: string;
    slug: string;
    orientation: Orientation;
    whiteFrame: boolean;
    variants: Array<{
      id: string;
      price: number;
      width: number;
      height: number;
    }>;
    categories: Array<{ slug: string }>;
    images: Array<{ id: string; alt?: string | null; url: string }>;
  }>;
};

export type GetProductsSlugsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsSlugsQuery = { products: Array<{ slug: string }> };

export type GetProductBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetProductBySlugQuery = {
  product?: {
    id: string;
    name: string;
    description: string;
    paperWeight: number;
    orientation: Orientation;
    slug: string;
    color: string;
    sale?: string | null;
    whiteFrame: boolean;
    finish: string;
    variants: Array<{
      id: string;
      width: number;
      height: number;
      price: number;
    }>;
    categories: Array<{ id: string; name: string }>;
    images: Array<{ id: string; alt?: string | null; url: string }>;
  } | null;
};

export type CreateAccountMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type CreateAccountMutation = {
  createAccount?: { email: string; id: string } | null;
};

export type GetDiscountCodesQueryVariables = Exact<{
  code: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
}>;

export type GetDiscountCodesQuery = {
  discountCodes: Array<{ code: string; discount: number; used: boolean }>;
};

export type GetAccountByEmailQueryVariables = Exact<{
  email: Scalars["String"]["input"];
}>;

export type GetAccountByEmailQuery = {
  account?: { id: string; email: string; password: string } | null;
};

export type GetProductsByIdsQueryVariables = Exact<{
  productsId: Array<Scalars["ID"]["input"]> | Scalars["ID"]["input"];
}>;

export type GetProductsByIdsQuery = {
  products: Array<{
    id: string;
    variants: Array<{
      id: string;
      price: number;
      width: number;
      height: number;
    }>;
  }>;
};

export type GetProductsByCategorySlugQueryVariables = Exact<{
  categorySlug: Scalars["String"]["input"];
  skip: Scalars["Int"]["input"];
  first: Scalars["Int"]["input"];
}>;

export type GetProductsByCategorySlugQuery = {
  products: Array<{
    sale?: string | null;
    id: string;
    name: string;
    slug: string;
    orientation: Orientation;
    whiteFrame: boolean;
    variants: Array<{
      id: string;
      price: number;
      width: number;
      height: number;
    }>;
    categories: Array<{ slug: string }>;
    images: Array<{ id: string; alt?: string | null; url: string }>;
  }>;
  productsConnection: { pageInfo: { pageSize?: number | null } };
};

export type CreateReviewProductMutationVariables = Exact<{
  review: ReviewCreateInput;
}>;

export type CreateReviewProductMutation = {
  createReview?: { id: string; stage: Stage } | null;
};

export type GetProductReviewsBySlugQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type GetProductReviewsBySlugQuery = {
  product?: {
    reviews: Array<{
      id: string;
      email: string;
      rating: number;
      content: string;
      name: string;
    }>;
  } | null;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>["__apiType"];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CategoriesFragmentDoc = new TypedDocumentString(
  `
    fragment Categories on Category {
  id
  name
  slug
}
    `,
  { fragmentName: "Categories" },
) as unknown as TypedDocumentString<CategoriesFragment, unknown>;
export const ImagesFragmentDoc = new TypedDocumentString(
  `
    fragment Images on Asset {
  id
  alt
  url
}
    `,
  { fragmentName: "Images" },
) as unknown as TypedDocumentString<ImagesFragment, unknown>;
export const ProductDisplayFragmentDoc = new TypedDocumentString(
  `
    fragment ProductDisplay on Product {
  sale
  id
  name
  slug
  orientation
  whiteFrame
  variants(orderBy: price_ASC, first: 1) {
    id
    price
    width
    height
  }
  categories {
    slug
  }
  images {
    ...Images
  }
}
    fragment Images on Asset {
  id
  alt
  url
}`,
  { fragmentName: "ProductDisplay" },
) as unknown as TypedDocumentString<ProductDisplayFragment, unknown>;
export const VariantFragmentDoc = new TypedDocumentString(
  `
    fragment Variant on ProductVariantType {
  id
  width
  height
  price
}
    `,
  { fragmentName: "Variant" },
) as unknown as TypedDocumentString<VariantFragment, unknown>;
export const ProductDetailsFragmentDoc = new TypedDocumentString(
  `
    fragment ProductDetails on Product {
  id
  name
  description
  paperWeight
  orientation
  slug
  color
  sale
  whiteFrame
  paperWeight
  finish
  variants {
    ...Variant
  }
  categories {
    id
    name
  }
  images {
    ...Images
  }
}
    fragment Images on Asset {
  id
  alt
  url
}
fragment Variant on ProductVariantType {
  id
  width
  height
  price
}`,
  { fragmentName: "ProductDetails" },
) as unknown as TypedDocumentString<ProductDetailsFragment, unknown>;
export const ReviewProductFragmentDoc = new TypedDocumentString(
  `
    fragment ReviewProduct on Review {
  name
  id
  email
  rating
  content
}
    `,
  { fragmentName: "ReviewProduct" },
) as unknown as TypedDocumentString<ReviewProductFragment, unknown>;
export const GetCategoriesDocument = new TypedDocumentString(`
    query GetCategories {
  categories {
    ...Categories
  }
}
    fragment Categories on Category {
  id
  name
  slug
}`) as unknown as TypedDocumentString<
  GetCategoriesQuery,
  GetCategoriesQueryVariables
>;
export const CreateOrderDocument = new TypedDocumentString(`
    mutation CreateOrder($email: String!, $totalOrderPrice: Int!, $stripeCheckoutId: String!, $orderItems: OrderItemCreateManyInlineInput!, $statusOrder: StatusOrder!) {
  createOrder(
    data: {email: $email, total: $totalOrderPrice, stripeCheckoutId: $stripeCheckoutId, orderItems: $orderItems, statusOrder: $statusOrder}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  CreateOrderMutation,
  CreateOrderMutationVariables
>;
export const UpdateOrderPaymentByIdDocument = new TypedDocumentString(`
    mutation UpdateOrderPaymentById($orderId: ID!) {
  updateOrder(data: {statusOrder: PAID}, where: {id: $orderId}) {
    id
  }
}
    `) as unknown as TypedDocumentString<
  UpdateOrderPaymentByIdMutation,
  UpdateOrderPaymentByIdMutationVariables
>;
export const GetProductsToCarrouselDocument = new TypedDocumentString(`
    query GetProductsToCarrousel {
  products(first: 12) {
    ...ProductDisplay
  }
}
    fragment Images on Asset {
  id
  alt
  url
}
fragment ProductDisplay on Product {
  sale
  id
  name
  slug
  orientation
  whiteFrame
  variants(orderBy: price_ASC, first: 1) {
    id
    price
    width
    height
  }
  categories {
    slug
  }
  images {
    ...Images
  }
}`) as unknown as TypedDocumentString<
  GetProductsToCarrouselQuery,
  GetProductsToCarrouselQueryVariables
>;
export const GetProductsToCarrouselByCategorySlugWithoutProductDocument =
  new TypedDocumentString(`
    query GetProductsToCarrouselByCategorySlugWithoutProduct($categorySlug: String!, $productId: ID!) {
  products(
    first: 12
    where: {categories_some: {slug: $categorySlug}, id_not: $productId}
  ) {
    ...ProductDisplay
  }
}
    fragment Images on Asset {
  id
  alt
  url
}
fragment ProductDisplay on Product {
  sale
  id
  name
  slug
  orientation
  whiteFrame
  variants(orderBy: price_ASC, first: 1) {
    id
    price
    width
    height
  }
  categories {
    slug
  }
  images {
    ...Images
  }
}`) as unknown as TypedDocumentString<
    GetProductsToCarrouselByCategorySlugWithoutProductQuery,
    GetProductsToCarrouselByCategorySlugWithoutProductQueryVariables
  >;
export const GetProductsToCarrouselByCategorySlugDocument =
  new TypedDocumentString(`
    query GetProductsToCarrouselByCategorySlug($categorySlug: String!) {
  products(first: 12, where: {categories_some: {slug: $categorySlug}}) {
    ...ProductDisplay
  }
}
    fragment Images on Asset {
  id
  alt
  url
}
fragment ProductDisplay on Product {
  sale
  id
  name
  slug
  orientation
  whiteFrame
  variants(orderBy: price_ASC, first: 1) {
    id
    price
    width
    height
  }
  categories {
    slug
  }
  images {
    ...Images
  }
}`) as unknown as TypedDocumentString<
    GetProductsToCarrouselByCategorySlugQuery,
    GetProductsToCarrouselByCategorySlugQueryVariables
  >;
export const GetProductsSlugsDocument = new TypedDocumentString(`
    query GetProductsSlugs {
  products {
    slug
  }
}
    `) as unknown as TypedDocumentString<
  GetProductsSlugsQuery,
  GetProductsSlugsQueryVariables
>;
export const GetProductBySlugDocument = new TypedDocumentString(`
    query GetProductBySlug($slug: String) {
  product(where: {slug: $slug}) {
    ...ProductDetails
  }
}
    fragment Images on Asset {
  id
  alt
  url
}
fragment ProductDetails on Product {
  id
  name
  description
  paperWeight
  orientation
  slug
  color
  sale
  whiteFrame
  paperWeight
  finish
  variants {
    ...Variant
  }
  categories {
    id
    name
  }
  images {
    ...Images
  }
}
fragment Variant on ProductVariantType {
  id
  width
  height
  price
}`) as unknown as TypedDocumentString<
  GetProductBySlugQuery,
  GetProductBySlugQueryVariables
>;
export const CreateAccountDocument = new TypedDocumentString(`
    mutation CreateAccount($email: String!, $password: String!) {
  createAccount(
    data: {email: $email, password: $password, discountCode: {create: {DiscountCode: {code: "START15", used: false, discount: 15}}}}
  ) {
    email
    id
  }
}
    `) as unknown as TypedDocumentString<
  CreateAccountMutation,
  CreateAccountMutationVariables
>;
export const GetDiscountCodesDocument = new TypedDocumentString(`
    query GetDiscountCodes($code: String!, $email: String!) {
  discountCodes(
    where: {code_contains: $code, used: false, accounts_some: {email: $email}}
    stage: DRAFT
  ) {
    code
    discount
    used
  }
}
    `) as unknown as TypedDocumentString<
  GetDiscountCodesQuery,
  GetDiscountCodesQueryVariables
>;
export const GetAccountByEmailDocument = new TypedDocumentString(`
    query GetAccountByEmail($email: String!) {
  account(where: {email: $email}, stage: DRAFT) {
    id
    email
    password
  }
}
    `) as unknown as TypedDocumentString<
  GetAccountByEmailQuery,
  GetAccountByEmailQueryVariables
>;
export const GetProductsByIdsDocument = new TypedDocumentString(`
    query GetProductsByIds($productsId: [ID!]!) {
  products(where: {id_in: $productsId}) {
    id
    variants {
      id
      price
      width
      height
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetProductsByIdsQuery,
  GetProductsByIdsQueryVariables
>;
export const GetProductsByCategorySlugDocument = new TypedDocumentString(`
    query GetProductsByCategorySlug($categorySlug: String!, $skip: Int!, $first: Int!) {
  products(
    first: $first
    where: {categories_some: {slug: $categorySlug}}
    skip: $skip
  ) {
    ...ProductDisplay
  }
  productsConnection(skip: $skip, where: {categories_some: {slug: $categorySlug}}) {
    pageInfo {
      pageSize
    }
  }
}
    fragment Images on Asset {
  id
  alt
  url
}
fragment ProductDisplay on Product {
  sale
  id
  name
  slug
  orientation
  whiteFrame
  variants(orderBy: price_ASC, first: 1) {
    id
    price
    width
    height
  }
  categories {
    slug
  }
  images {
    ...Images
  }
}`) as unknown as TypedDocumentString<
  GetProductsByCategorySlugQuery,
  GetProductsByCategorySlugQueryVariables
>;
export const CreateReviewProductDocument = new TypedDocumentString(`
    mutation CreateReviewProduct($review: ReviewCreateInput!) {
  createReview(data: $review) {
    id
    stage
  }
}
    `) as unknown as TypedDocumentString<
  CreateReviewProductMutation,
  CreateReviewProductMutationVariables
>;
export const GetProductReviewsBySlugDocument = new TypedDocumentString(`
    query GetProductReviewsBySlug($slug: String!) {
  product(where: {slug: $slug}, stage: DRAFT) {
    reviews {
      id
      email
      rating
      content
      name
    }
  }
}
    `) as unknown as TypedDocumentString<
  GetProductReviewsBySlugQuery,
  GetProductReviewsBySlugQueryVariables
>;
