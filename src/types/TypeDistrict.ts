import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeRepresentativesSkeleton } from "./TypeRepresentatives";

/**
 * Fields type definition for content type 'TypeDistrict'
 * @name TypeDistrictFields
 * @type {TypeDistrictFields}
 * @memberof TypeDistrict
 */
export interface TypeDistrictFields {
    /**
     * Field type definition for field 'id' (id)
     * @name id
     * @localized false
     * @summary District #
     */
    id: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'color' (Color)
     * @name Color
     * @localized false
     */
    color: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'summary' (Summary)
     * @name Summary
     * @localized false
     * @summary Summary displayed in the district cards
     */
    summary: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     * @summary Description displayed in the district page
     */
    description: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'composition' (Composition)
     * @name Composition
     * @localized false
     */
    composition: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'gallery' (Gallery)
     * @name Gallery
     * @localized false
     */
    gallery: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    /**
     * Field type definition for field 'representatives' (Representatives)
     * @name Representatives
     * @localized false
     */
    representatives: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRepresentativesSkeleton>>;
    /**
     * Field type definition for field 'headerImage' (Header Image)
     * @name Header Image
     * @localized false
     */
    headerImage: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'mainClub' (Main Club)
     * @name Main Club
     * @localized false
     * @summary Main Club of DRR
     */
    mainClub: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'activities' (Activities)
     * @name Activities
     * @localized false
     */
    activities?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'mission' (Mission)
     * @name Mission
     * @localized false
     */
    mission?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'vision' (Vision)
     * @name Vision
     * @localized false
     */
    vision?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'facebookPageUrl' (Facebook Page Url)
     * @name Facebook Page Url
     * @localized false
     */
    facebookPageUrl: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'district' (District)
 * @name TypeDistrictSkeleton
 * @type {TypeDistrictSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T07:31:36.185Z
 * @version 45
 */
export type TypeDistrictSkeleton = EntrySkeletonType<TypeDistrictFields, "district">;
/**
 * Entry type definition for content type 'district' (District)
 * @name TypeDistrict
 * @type {TypeDistrict}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T07:31:36.185Z
 * @version 45
 */
export type TypeDistrict<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeDistrictSkeleton, Modifiers, Locales>;
