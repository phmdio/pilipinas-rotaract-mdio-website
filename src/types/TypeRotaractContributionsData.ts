import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRotaractContributionsData'
 * @name TypeRotaractContributionsDataFields
 * @type {TypeRotaractContributionsDataFields}
 * @memberof TypeRotaractContributionsData
 */
export interface TypeRotaractContributionsDataFields {
    /**
     * Field type definition for field 'district' (District)
     * @name District
     * @localized false
     */
    district: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'annualFund' (Annual Fund)
     * @name Annual Fund
     * @localized false
     */
    annualFund: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'polioPlus' (Polio Plus)
     * @name Polio Plus
     * @localized false
     */
    polioPlus: EntryFieldTypes.Integer;
}

/**
 * Entry skeleton type definition for content type 'rotaractContributionsData' (Rotaract Contributions Data)
 * @name TypeRotaractContributionsDataSkeleton
 * @type {TypeRotaractContributionsDataSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T19:00:25.291Z
 * @version 1
 */
export type TypeRotaractContributionsDataSkeleton = EntrySkeletonType<TypeRotaractContributionsDataFields, "rotaractContributionsData">;
/**
 * Entry type definition for content type 'rotaractContributionsData' (Rotaract Contributions Data)
 * @name TypeRotaractContributionsData
 * @type {TypeRotaractContributionsData}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T19:00:25.291Z
 * @version 1
 */
export type TypeRotaractContributionsData<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRotaractContributionsDataSkeleton, Modifiers, Locales>;
