import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeEvent'
 * @name TypeEventFields
 * @type {TypeEventFields}
 * @memberof TypeEvent
 */
export interface TypeEventFields {
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
     * @summary For PROCON, please fill this out. Actions inputted here will be reflected on procon page
     */
    facebookPageUrl?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'event' (Event)
 * @name TypeEventSkeleton
 * @type {TypeEventSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-25T17:45:44.831Z
 * @version 9
 */
export type TypeEventSkeleton = EntrySkeletonType<TypeEventFields, "event">;
/**
 * Entry type definition for content type 'event' (Event)
 * @name TypeEvent
 * @type {TypeEvent}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-25T17:45:44.831Z
 * @version 9
 */
export type TypeEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeEventSkeleton, Modifiers, Locales>;
