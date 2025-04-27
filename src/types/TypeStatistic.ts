import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeStatistic'
 * @name TypeStatisticFields
 * @type {TypeStatisticFields}
 * @memberof TypeStatistic
 */
export interface TypeStatisticFields {
    /**
     * Field type definition for field 'value' (Value)
     * @name Value
     * @localized false
     */
    value: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'label' (Label)
     * @name Label
     * @localized false
     */
    label: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'icon' (Icon)
     * @name Icon
     * @localized false
     */
    icon: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'statistic' (Statistic)
 * @name TypeStatisticSkeleton
 * @type {TypeStatisticSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:19:37.725Z
 * @version 5
 */
export type TypeStatisticSkeleton = EntrySkeletonType<TypeStatisticFields, "statistic">;
/**
 * Entry type definition for content type 'statistic' (Statistic)
 * @name TypeStatistic
 * @type {TypeStatistic}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:19:37.725Z
 * @version 5
 */
export type TypeStatistic<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStatisticSkeleton, Modifiers, Locales>;
