import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeAction'
 * @name TypeActionFields
 * @type {TypeActionFields}
 * @memberof TypeAction
 */
export interface TypeActionFields {
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
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'action' (Action)
 * @name TypeActionSkeleton
 * @type {TypeActionSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-25T16:56:59.155Z
 * @version 1
 */
export type TypeActionSkeleton = EntrySkeletonType<TypeActionFields, "action">;
/**
 * Entry type definition for content type 'action' (Action)
 * @name TypeAction
 * @type {TypeAction}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-25T16:56:59.155Z
 * @version 1
 */
export type TypeAction<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeActionSkeleton, Modifiers, Locales>;
