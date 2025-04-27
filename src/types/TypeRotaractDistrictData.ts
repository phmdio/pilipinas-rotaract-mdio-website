import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRotaractDistrictData'
 * @name TypeRotaractDistrictDataFields
 * @type {TypeRotaractDistrictDataFields}
 * @memberof TypeRotaractDistrictData
 */
export interface TypeRotaractDistrictDataFields {
    /**
     * Field type definition for field 'year' (Year)
     * @name Year
     * @localized false
     */
    year: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'district' (District)
     * @name District
     * @localized false
     */
    district: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'members' (Members)
     * @name Members
     * @localized false
     * @summary The total number of Rotaract members in this district for the given year
     */
    members: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'clubs' (Clubs)
     * @name Clubs
     * @localized false
     * @summary The total number of active Rotaract clubs in this district for the given year
     */
    clubs: EntryFieldTypes.Integer;
}

/**
 * Entry skeleton type definition for content type 'rotaractDistrictData' (Rotaract District Data)
 * @name TypeRotaractDistrictDataSkeleton
 * @type {TypeRotaractDistrictDataSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:57:16.908Z
 * @version 1
 */
export type TypeRotaractDistrictDataSkeleton = EntrySkeletonType<TypeRotaractDistrictDataFields, "rotaractDistrictData">;
/**
 * Entry type definition for content type 'rotaractDistrictData' (Rotaract District Data)
 * @name TypeRotaractDistrictData
 * @type {TypeRotaractDistrictData}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:57:16.908Z
 * @version 1
 */
export type TypeRotaractDistrictData<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRotaractDistrictDataSkeleton, Modifiers, Locales>;
