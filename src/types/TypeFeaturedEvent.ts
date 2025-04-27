import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeEventSkeleton } from "./TypeEvent";

/**
 * Fields type definition for content type 'TypeFeaturedEvent'
 * @name TypeFeaturedEventFields
 * @type {TypeFeaturedEventFields}
 * @memberof TypeFeaturedEvent
 */
export interface TypeFeaturedEventFields {
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
     * Field type definition for field 'date' (Date)
     * @name Date
     * @localized false
     */
    date: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'location' (Location)
     * @name Location
     * @localized false
     */
    location: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'objectiveDetails' (Objective Details)
     * @name Objective Details
     * @localized false
     */
    objectiveDetails?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'moreInfo' (More Info)
     * @name More Info
     * @localized false
     */
    moreInfo?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'additionalDetails' (Additional Details)
     * @name Additional Details
     * @localized false
     */
    additionalDetails?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'closingDetails' (Closing Details)
     * @name Closing Details
     * @localized false
     */
    closingDetails: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'eventUrl' (Event URL)
     * @name Event URL
     * @localized false
     */
    eventUrl: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'facebookPageUrl' (Facebook Page URL)
     * @name Facebook Page URL
     * @localized false
     */
    facebookPageUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'isProcon' (Is Procon)
     * @name Is Procon
     * @localized false
     */
    isProcon: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'procon' (Procon)
     * @name Procon
     * @localized false
     * @summary For the PROCON event, please fill this out. Actions inputted here will be reflected on PROCON page
     */
    procon?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeEventSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'featuredEvent' (Featured Event)
 * @name TypeFeaturedEventSkeleton
 * @type {TypeFeaturedEventSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:11:45.088Z
 * @version 21
 */
export type TypeFeaturedEventSkeleton = EntrySkeletonType<TypeFeaturedEventFields, "featuredEvent">;
/**
 * Entry type definition for content type 'featuredEvent' (Featured Event)
 * @name TypeFeaturedEvent
 * @type {TypeFeaturedEvent}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T18:11:45.088Z
 * @version 21
 */
export type TypeFeaturedEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFeaturedEventSkeleton, Modifiers, Locales>;
