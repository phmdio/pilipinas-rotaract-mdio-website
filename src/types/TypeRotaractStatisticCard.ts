import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRotaractStatisticCard'
 * @name TypeRotaractStatisticCardFields
 * @type {TypeRotaractStatisticCardFields}
 * @memberof TypeRotaractStatisticCard
 */
export interface TypeRotaractStatisticCardFields {
    /**
     * Field type definition for field 'number' (Number)
     * @name Number
     * @localized false
     */
    number: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'rotaractStatisticCard' (Rotaract Statistic Card)
 * @name TypeRotaractStatisticCardSkeleton
 * @type {TypeRotaractStatisticCardSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:51:47.021Z
 * @version 3
 */
export type TypeRotaractStatisticCardSkeleton = EntrySkeletonType<TypeRotaractStatisticCardFields, "rotaractStatisticCard">;
/**
 * Entry type definition for content type 'rotaractStatisticCard' (Rotaract Statistic Card)
 * @name TypeRotaractStatisticCard
 * @type {TypeRotaractStatisticCard}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:51:47.021Z
 * @version 3
 */
export type TypeRotaractStatisticCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRotaractStatisticCardSkeleton, Modifiers, Locales>;
