import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Friendship: crudResolvers.FriendshipCrudResolver,
  Collection: crudResolvers.CollectionCrudResolver,
  CollectionCollaborator: crudResolvers.CollectionCollaboratorCrudResolver,
  Todo: crudResolvers.TodoCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Friendship: {
    aggregateFriendship: actionResolvers.AggregateFriendshipResolver,
    createManyFriendship: actionResolvers.CreateManyFriendshipResolver,
    createOneFriendship: actionResolvers.CreateOneFriendshipResolver,
    deleteManyFriendship: actionResolvers.DeleteManyFriendshipResolver,
    deleteOneFriendship: actionResolvers.DeleteOneFriendshipResolver,
    findFirstFriendship: actionResolvers.FindFirstFriendshipResolver,
    findFirstFriendshipOrThrow: actionResolvers.FindFirstFriendshipOrThrowResolver,
    friendships: actionResolvers.FindManyFriendshipResolver,
    friendship: actionResolvers.FindUniqueFriendshipResolver,
    getFriendship: actionResolvers.FindUniqueFriendshipOrThrowResolver,
    groupByFriendship: actionResolvers.GroupByFriendshipResolver,
    updateManyFriendship: actionResolvers.UpdateManyFriendshipResolver,
    updateOneFriendship: actionResolvers.UpdateOneFriendshipResolver,
    upsertOneFriendship: actionResolvers.UpsertOneFriendshipResolver
  },
  Collection: {
    aggregateCollection: actionResolvers.AggregateCollectionResolver,
    createManyCollection: actionResolvers.CreateManyCollectionResolver,
    createOneCollection: actionResolvers.CreateOneCollectionResolver,
    deleteManyCollection: actionResolvers.DeleteManyCollectionResolver,
    deleteOneCollection: actionResolvers.DeleteOneCollectionResolver,
    findFirstCollection: actionResolvers.FindFirstCollectionResolver,
    findFirstCollectionOrThrow: actionResolvers.FindFirstCollectionOrThrowResolver,
    collections: actionResolvers.FindManyCollectionResolver,
    collection: actionResolvers.FindUniqueCollectionResolver,
    getCollection: actionResolvers.FindUniqueCollectionOrThrowResolver,
    groupByCollection: actionResolvers.GroupByCollectionResolver,
    updateManyCollection: actionResolvers.UpdateManyCollectionResolver,
    updateOneCollection: actionResolvers.UpdateOneCollectionResolver,
    upsertOneCollection: actionResolvers.UpsertOneCollectionResolver
  },
  CollectionCollaborator: {
    aggregateCollectionCollaborator: actionResolvers.AggregateCollectionCollaboratorResolver,
    createManyCollectionCollaborator: actionResolvers.CreateManyCollectionCollaboratorResolver,
    createOneCollectionCollaborator: actionResolvers.CreateOneCollectionCollaboratorResolver,
    deleteManyCollectionCollaborator: actionResolvers.DeleteManyCollectionCollaboratorResolver,
    deleteOneCollectionCollaborator: actionResolvers.DeleteOneCollectionCollaboratorResolver,
    findFirstCollectionCollaborator: actionResolvers.FindFirstCollectionCollaboratorResolver,
    findFirstCollectionCollaboratorOrThrow: actionResolvers.FindFirstCollectionCollaboratorOrThrowResolver,
    collectionCollaborators: actionResolvers.FindManyCollectionCollaboratorResolver,
    collectionCollaborator: actionResolvers.FindUniqueCollectionCollaboratorResolver,
    getCollectionCollaborator: actionResolvers.FindUniqueCollectionCollaboratorOrThrowResolver,
    groupByCollectionCollaborator: actionResolvers.GroupByCollectionCollaboratorResolver,
    updateManyCollectionCollaborator: actionResolvers.UpdateManyCollectionCollaboratorResolver,
    updateOneCollectionCollaborator: actionResolvers.UpdateOneCollectionCollaboratorResolver,
    upsertOneCollectionCollaborator: actionResolvers.UpsertOneCollectionCollaboratorResolver
  },
  Todo: {
    aggregateTodo: actionResolvers.AggregateTodoResolver,
    createManyTodo: actionResolvers.CreateManyTodoResolver,
    createOneTodo: actionResolvers.CreateOneTodoResolver,
    deleteManyTodo: actionResolvers.DeleteManyTodoResolver,
    deleteOneTodo: actionResolvers.DeleteOneTodoResolver,
    findFirstTodo: actionResolvers.FindFirstTodoResolver,
    findFirstTodoOrThrow: actionResolvers.FindFirstTodoOrThrowResolver,
    todos: actionResolvers.FindManyTodoResolver,
    todo: actionResolvers.FindUniqueTodoResolver,
    getTodo: actionResolvers.FindUniqueTodoOrThrowResolver,
    groupByTodo: actionResolvers.GroupByTodoResolver,
    updateManyTodo: actionResolvers.UpdateManyTodoResolver,
    updateOneTodo: actionResolvers.UpdateOneTodoResolver,
    upsertOneTodo: actionResolvers.UpsertOneTodoResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Friendship: ["aggregateFriendship", "createManyFriendship", "createOneFriendship", "deleteManyFriendship", "deleteOneFriendship", "findFirstFriendship", "findFirstFriendshipOrThrow", "friendships", "friendship", "getFriendship", "groupByFriendship", "updateManyFriendship", "updateOneFriendship", "upsertOneFriendship"],
  Collection: ["aggregateCollection", "createManyCollection", "createOneCollection", "deleteManyCollection", "deleteOneCollection", "findFirstCollection", "findFirstCollectionOrThrow", "collections", "collection", "getCollection", "groupByCollection", "updateManyCollection", "updateOneCollection", "upsertOneCollection"],
  CollectionCollaborator: ["aggregateCollectionCollaborator", "createManyCollectionCollaborator", "createOneCollectionCollaborator", "deleteManyCollectionCollaborator", "deleteOneCollectionCollaborator", "findFirstCollectionCollaborator", "findFirstCollectionCollaboratorOrThrow", "collectionCollaborators", "collectionCollaborator", "getCollectionCollaborator", "groupByCollectionCollaborator", "updateManyCollectionCollaborator", "updateOneCollectionCollaborator", "upsertOneCollectionCollaborator"],
  Todo: ["aggregateTodo", "createManyTodo", "createOneTodo", "deleteManyTodo", "deleteOneTodo", "findFirstTodo", "findFirstTodoOrThrow", "todos", "todo", "getTodo", "groupByTodo", "updateManyTodo", "updateOneTodo", "upsertOneTodo"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateFriendshipArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyFriendshipArgs: ["data"],
  CreateOneFriendshipArgs: ["data"],
  DeleteManyFriendshipArgs: ["where"],
  DeleteOneFriendshipArgs: ["where"],
  FindFirstFriendshipArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstFriendshipOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyFriendshipArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueFriendshipArgs: ["where"],
  FindUniqueFriendshipOrThrowArgs: ["where"],
  GroupByFriendshipArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyFriendshipArgs: ["data", "where"],
  UpdateOneFriendshipArgs: ["data", "where"],
  UpsertOneFriendshipArgs: ["where", "create", "update"],
  AggregateCollectionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCollectionArgs: ["data"],
  CreateOneCollectionArgs: ["data"],
  DeleteManyCollectionArgs: ["where"],
  DeleteOneCollectionArgs: ["where"],
  FindFirstCollectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCollectionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCollectionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCollectionArgs: ["where"],
  FindUniqueCollectionOrThrowArgs: ["where"],
  GroupByCollectionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCollectionArgs: ["data", "where"],
  UpdateOneCollectionArgs: ["data", "where"],
  UpsertOneCollectionArgs: ["where", "create", "update"],
  AggregateCollectionCollaboratorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCollectionCollaboratorArgs: ["data"],
  CreateOneCollectionCollaboratorArgs: ["data"],
  DeleteManyCollectionCollaboratorArgs: ["where"],
  DeleteOneCollectionCollaboratorArgs: ["where"],
  FindFirstCollectionCollaboratorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCollectionCollaboratorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCollectionCollaboratorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCollectionCollaboratorArgs: ["where"],
  FindUniqueCollectionCollaboratorOrThrowArgs: ["where"],
  GroupByCollectionCollaboratorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCollectionCollaboratorArgs: ["data", "where"],
  UpdateOneCollectionCollaboratorArgs: ["data", "where"],
  UpsertOneCollectionCollaboratorArgs: ["where", "create", "update"],
  AggregateTodoArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTodoArgs: ["data"],
  CreateOneTodoArgs: ["data"],
  DeleteManyTodoArgs: ["where"],
  DeleteOneTodoArgs: ["where"],
  FindFirstTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTodoOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTodoArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTodoArgs: ["where"],
  FindUniqueTodoOrThrowArgs: ["where"],
  GroupByTodoArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTodoArgs: ["data", "where"],
  UpdateOneTodoArgs: ["data", "where"],
  UpsertOneTodoArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Friendship: relationResolvers.FriendshipRelationsResolver,
  Collection: relationResolvers.CollectionRelationsResolver,
  CollectionCollaborator: relationResolvers.CollectionCollaboratorRelationsResolver,
  Todo: relationResolvers.TodoRelationsResolver
};
const relationResolversInfo = {
  User: ["collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  Friendship: ["user", "friend"],
  Collection: ["owner", "collaborators", "todos"],
  CollectionCollaborator: ["collection", "user"],
  Todo: ["collection", "creator"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  Friendship: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  Collection: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionCollaborator: ["id", "permission", "collectionId", "userId"],
  Todo: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "_count", "_min", "_max"],
  AggregateFriendship: ["_count", "_min", "_max"],
  FriendshipGroupBy: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "_count", "_min", "_max"],
  AggregateCollection: ["_count", "_min", "_max"],
  CollectionGroupBy: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId", "_count", "_min", "_max"],
  AggregateCollectionCollaborator: ["_count", "_min", "_max"],
  CollectionCollaboratorGroupBy: ["id", "permission", "collectionId", "userId", "_count", "_min", "_max"],
  AggregateTodo: ["_count", "_min", "_max"],
  TodoGroupBy: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserCountAggregate: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "_all"],
  UserMinAggregate: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  UserMaxAggregate: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  FriendshipCountAggregate: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "_all"],
  FriendshipMinAggregate: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  FriendshipMaxAggregate: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  CollectionCount: ["collaborators", "todos"],
  CollectionCountAggregate: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId", "_all"],
  CollectionMinAggregate: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionMaxAggregate: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionCollaboratorCountAggregate: ["id", "permission", "collectionId", "userId", "_all"],
  CollectionCollaboratorMinAggregate: ["id", "permission", "collectionId", "userId"],
  CollectionCollaboratorMaxAggregate: ["id", "permission", "collectionId", "userId"],
  TodoCountAggregate: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId", "_all"],
  TodoMinAggregate: ["id", "title", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  TodoMaxAggregate: ["id", "title", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserOrderByWithRelationInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserWhereUniqueInput: ["id", "email", "AND", "OR", "NOT", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserOrderByWithAggregationInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "_count", "_max", "_min"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  FriendshipWhereInput: ["AND", "OR", "NOT", "id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user", "friend"],
  FriendshipOrderByWithRelationInput: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user", "friend"],
  FriendshipWhereUniqueInput: ["id", "userId_friendId", "AND", "OR", "NOT", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user", "friend"],
  FriendshipOrderByWithAggregationInput: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "_count", "_max", "_min"],
  FriendshipScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  CollectionWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId", "owner", "collaborators", "todos"],
  CollectionOrderByWithRelationInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId", "owner", "collaborators", "todos"],
  CollectionWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId", "owner", "collaborators", "todos"],
  CollectionOrderByWithAggregationInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId", "_count", "_max", "_min"],
  CollectionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionCollaboratorWhereInput: ["AND", "OR", "NOT", "id", "permission", "collectionId", "userId", "collection", "user"],
  CollectionCollaboratorOrderByWithRelationInput: ["id", "permission", "collectionId", "userId", "collection", "user"],
  CollectionCollaboratorWhereUniqueInput: ["id", "AND", "OR", "NOT", "permission", "collectionId", "userId", "collection", "user"],
  CollectionCollaboratorOrderByWithAggregationInput: ["id", "permission", "collectionId", "userId", "_count", "_max", "_min"],
  CollectionCollaboratorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "permission", "collectionId", "userId"],
  TodoWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId", "collection", "creator"],
  TodoOrderByWithRelationInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId", "collection", "creator"],
  TodoWhereUniqueInput: ["id", "AND", "OR", "NOT", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId", "collection", "creator"],
  TodoOrderByWithAggregationInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId", "_count", "_max", "_min"],
  TodoScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  UserCreateInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserUpdateInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserCreateManyInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  UserUpdateManyMutationInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  FriendshipCreateInput: ["id", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user", "friend"],
  FriendshipUpdateInput: ["status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user", "friend"],
  FriendshipCreateManyInput: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  FriendshipUpdateManyMutationInput: ["status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  CollectionCreateInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "owner", "collaborators", "todos"],
  CollectionUpdateInput: ["name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "owner", "collaborators", "todos"],
  CollectionCreateManyInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionUpdateManyMutationInput: ["name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt"],
  CollectionCollaboratorCreateInput: ["id", "permission", "collection", "user"],
  CollectionCollaboratorUpdateInput: ["permission", "collection", "user"],
  CollectionCollaboratorCreateManyInput: ["id", "permission", "collectionId", "userId"],
  CollectionCollaboratorUpdateManyMutationInput: ["permission"],
  TodoCreateInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collection", "creator"],
  TodoUpdateInput: ["title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collection", "creator"],
  TodoCreateManyInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  TodoUpdateManyMutationInput: ["title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  BoolFilter: ["equals", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  CollectionListRelationFilter: ["every", "some", "none"],
  CollectionCollaboratorListRelationFilter: ["every", "some", "none"],
  TodoListRelationFilter: ["every", "some", "none"],
  FriendshipListRelationFilter: ["every", "some", "none"],
  CollectionOrderByRelationAggregateInput: ["_count"],
  CollectionCollaboratorOrderByRelationAggregateInput: ["_count"],
  TodoOrderByRelationAggregateInput: ["_count"],
  FriendshipOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  UserMaxOrderByAggregateInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  UserMinOrderByAggregateInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  EnumFriendStatusFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  FriendshipUserIdFriendIdCompoundUniqueInput: ["userId", "friendId"],
  FriendshipCountOrderByAggregateInput: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  FriendshipMaxOrderByAggregateInput: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  FriendshipMinOrderByAggregateInput: ["id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  EnumFriendStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  CollectionCountOrderByAggregateInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionMaxOrderByAggregateInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionMinOrderByAggregateInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  EnumPermissionFilter: ["equals", "in", "notIn", "not"],
  CollectionRelationFilter: ["is", "isNot"],
  CollectionCollaboratorCountOrderByAggregateInput: ["id", "permission", "collectionId", "userId"],
  CollectionCollaboratorMaxOrderByAggregateInput: ["id", "permission", "collectionId", "userId"],
  CollectionCollaboratorMinOrderByAggregateInput: ["id", "permission", "collectionId", "userId"],
  EnumPermissionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  JsonNullableFilter: ["equals", "not", "isSet"],
  CollectionNullableRelationFilter: ["is", "isNot"],
  TodoCountOrderByAggregateInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  TodoMaxOrderByAggregateInput: ["id", "title", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  TodoMinOrderByAggregateInput: ["id", "title", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  JsonNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  CollectionCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  CollectionCollaboratorCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  TodoCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  FriendshipCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  FriendshipCreateNestedManyWithoutFriendInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  BoolFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableDateTimeFieldUpdateOperationsInput: ["set", "unset"],
  CollectionUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CollectionCollaboratorUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TodoUpdateManyWithoutCreatorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FriendshipUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  FriendshipUpdateManyWithoutFriendNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutInitiatedFriendshipInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutReceivedFriendshipInput: ["create", "connectOrCreate", "connect"],
  EnumFriendStatusFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutInitiatedFriendshipNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutReceivedFriendshipNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutCollectionsInput: ["create", "connectOrCreate", "connect"],
  CollectionCollaboratorCreateNestedManyWithoutCollectionInput: ["create", "connectOrCreate", "createMany", "connect"],
  TodoCreateNestedManyWithoutCollectionInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneRequiredWithoutCollectionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CollectionCollaboratorUpdateManyWithoutCollectionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TodoUpdateManyWithoutCollectionNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CollectionCreateNestedOneWithoutCollaboratorsInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutCollaborationsInput: ["create", "connectOrCreate", "connect"],
  EnumPermissionFieldUpdateOperationsInput: ["set"],
  CollectionUpdateOneRequiredWithoutCollaboratorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutCollaborationsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  CollectionCreateNestedOneWithoutTodosInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutTodosInput: ["create", "connectOrCreate", "connect"],
  CollectionUpdateOneWithoutTodosNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  UserUpdateOneRequiredWithoutTodosNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max", "isSet"],
  NestedEnumFriendStatusFilter: ["equals", "in", "notIn", "not"],
  NestedEnumFriendStatusWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedEnumPermissionFilter: ["equals", "in", "notIn", "not"],
  NestedEnumPermissionWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedJsonNullableFilter: ["equals", "not", "isSet"],
  CollectionCreateWithoutOwnerInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collaborators", "todos"],
  CollectionCreateOrConnectWithoutOwnerInput: ["where", "create"],
  CollectionCreateManyOwnerInputEnvelope: ["data"],
  CollectionCollaboratorCreateWithoutUserInput: ["id", "permission", "collection"],
  CollectionCollaboratorCreateOrConnectWithoutUserInput: ["where", "create"],
  CollectionCollaboratorCreateManyUserInputEnvelope: ["data"],
  TodoCreateWithoutCreatorInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collection"],
  TodoCreateOrConnectWithoutCreatorInput: ["where", "create"],
  TodoCreateManyCreatorInputEnvelope: ["data"],
  FriendshipCreateWithoutUserInput: ["id", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "friend"],
  FriendshipCreateOrConnectWithoutUserInput: ["where", "create"],
  FriendshipCreateManyUserInputEnvelope: ["data"],
  FriendshipCreateWithoutFriendInput: ["id", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user"],
  FriendshipCreateOrConnectWithoutFriendInput: ["where", "create"],
  FriendshipCreateManyFriendInputEnvelope: ["data"],
  CollectionUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  CollectionUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  CollectionUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  CollectionScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "ownerId"],
  CollectionCollaboratorUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  CollectionCollaboratorUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  CollectionCollaboratorUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  CollectionCollaboratorScalarWhereInput: ["AND", "OR", "NOT", "id", "permission", "collectionId", "userId"],
  TodoUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  TodoUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  TodoUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  TodoScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId", "creatorId"],
  FriendshipUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  FriendshipUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  FriendshipUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  FriendshipScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  FriendshipUpsertWithWhereUniqueWithoutFriendInput: ["where", "update", "create"],
  FriendshipUpdateWithWhereUniqueWithoutFriendInput: ["where", "data"],
  FriendshipUpdateManyWithWhereWithoutFriendInput: ["where", "data"],
  UserCreateWithoutInitiatedFriendshipInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "receivedFriendship"],
  UserCreateOrConnectWithoutInitiatedFriendshipInput: ["where", "create"],
  UserCreateWithoutReceivedFriendshipInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship"],
  UserCreateOrConnectWithoutReceivedFriendshipInput: ["where", "create"],
  UserUpsertWithoutInitiatedFriendshipInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutInitiatedFriendshipInput: ["where", "data"],
  UserUpdateWithoutInitiatedFriendshipInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "receivedFriendship"],
  UserUpsertWithoutReceivedFriendshipInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutReceivedFriendshipInput: ["where", "data"],
  UserUpdateWithoutReceivedFriendshipInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "todos", "initiatedFriendship"],
  UserCreateWithoutCollectionsInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  UserCreateOrConnectWithoutCollectionsInput: ["where", "create"],
  CollectionCollaboratorCreateWithoutCollectionInput: ["id", "permission", "user"],
  CollectionCollaboratorCreateOrConnectWithoutCollectionInput: ["where", "create"],
  CollectionCollaboratorCreateManyCollectionInputEnvelope: ["data"],
  TodoCreateWithoutCollectionInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "creator"],
  TodoCreateOrConnectWithoutCollectionInput: ["where", "create"],
  TodoCreateManyCollectionInputEnvelope: ["data"],
  UserUpsertWithoutCollectionsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCollectionsInput: ["where", "data"],
  UserUpdateWithoutCollectionsInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collaborations", "todos", "initiatedFriendship", "receivedFriendship"],
  CollectionCollaboratorUpsertWithWhereUniqueWithoutCollectionInput: ["where", "update", "create"],
  CollectionCollaboratorUpdateWithWhereUniqueWithoutCollectionInput: ["where", "data"],
  CollectionCollaboratorUpdateManyWithWhereWithoutCollectionInput: ["where", "data"],
  TodoUpsertWithWhereUniqueWithoutCollectionInput: ["where", "update", "create"],
  TodoUpdateWithWhereUniqueWithoutCollectionInput: ["where", "data"],
  TodoUpdateManyWithWhereWithoutCollectionInput: ["where", "data"],
  CollectionCreateWithoutCollaboratorsInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "owner", "todos"],
  CollectionCreateOrConnectWithoutCollaboratorsInput: ["where", "create"],
  UserCreateWithoutCollaborationsInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "todos", "initiatedFriendship", "receivedFriendship"],
  UserCreateOrConnectWithoutCollaborationsInput: ["where", "create"],
  CollectionUpsertWithoutCollaboratorsInput: ["update", "create", "where"],
  CollectionUpdateToOneWithWhereWithoutCollaboratorsInput: ["where", "data"],
  CollectionUpdateWithoutCollaboratorsInput: ["name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "owner", "todos"],
  UserUpsertWithoutCollaborationsInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutCollaborationsInput: ["where", "data"],
  UserUpdateWithoutCollaborationsInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "todos", "initiatedFriendship", "receivedFriendship"],
  CollectionCreateWithoutTodosInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "owner", "collaborators"],
  CollectionCreateOrConnectWithoutTodosInput: ["where", "create"],
  UserCreateWithoutTodosInput: ["id", "email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "initiatedFriendship", "receivedFriendship"],
  UserCreateOrConnectWithoutTodosInput: ["where", "create"],
  CollectionUpsertWithoutTodosInput: ["update", "create", "where"],
  CollectionUpdateToOneWithWhereWithoutTodosInput: ["where", "data"],
  CollectionUpdateWithoutTodosInput: ["name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "owner", "collaborators"],
  UserUpsertWithoutTodosInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutTodosInput: ["where", "data"],
  UserUpdateWithoutTodosInput: ["email", "password", "birthday", "name", "phoneNumber", "isDeleted", "isActive", "createdAt", "updatedAt", "deletedAt", "collections", "collaborations", "initiatedFriendship", "receivedFriendship"],
  CollectionCreateManyOwnerInput: ["id", "name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt"],
  CollectionCollaboratorCreateManyUserInput: ["id", "permission", "collectionId"],
  TodoCreateManyCreatorInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collectionId"],
  FriendshipCreateManyUserInput: ["id", "friendId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  FriendshipCreateManyFriendInput: ["id", "userId", "status", "isDeleted", "createdAt", "updatedAt", "deletedAt"],
  CollectionUpdateWithoutOwnerInput: ["name", "description", "isDeleted", "isActive", "isArchived", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collaborators", "todos"],
  CollectionCollaboratorUpdateWithoutUserInput: ["permission", "collection"],
  TodoUpdateWithoutCreatorInput: ["title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "collection"],
  FriendshipUpdateWithoutUserInput: ["status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "friend"],
  FriendshipUpdateWithoutFriendInput: ["status", "isDeleted", "createdAt", "updatedAt", "deletedAt", "user"],
  CollectionCollaboratorCreateManyCollectionInput: ["id", "permission", "userId"],
  TodoCreateManyCollectionInput: ["id", "title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "creatorId"],
  CollectionCollaboratorUpdateWithoutCollectionInput: ["permission", "user"],
  TodoUpdateWithoutCollectionInput: ["title", "content", "completed", "isDeleted", "isArchived", "dueDate", "createdAt", "updatedAt", "deletedAt", "archivedAt", "creator"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

