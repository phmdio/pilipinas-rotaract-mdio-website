import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeActionSkeleton } from "./TypeAction";

/**
 * Fields type definition for content type 'TypeLeadershipChair'
 * @name TypeLeadershipChairFields
 * @type {TypeLeadershipChairFields}
 * @memberof TypeLeadershipChair
 */
export interface TypeLeadershipChairFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
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
    /**
     * Field type definition for field 'headerImage' (Header Image)
     * @name Header Image
     * @localized false
     * @summary For the current chair, please fill this out. Actions inputted here will be reflected on our-chair page.
     */
    headerImage?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'club' (Club)
     * @name Club
     * @localized false
     */
    club: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'isCurrentChair' (Is Current Chair)
     * @name Is Current Chair
     * @localized false
     */
    isCurrentChair: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'actions' (Actions)
     * @name Actions
     * @localized false
     * @summary For the current chair, please fill this out. Actions inputted here will be reflected on our-chair page
     */
    actions?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeActionSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'leadershipChair' (Leadership Chair)
 * @name TypeLeadershipChairSkeleton
 * @type {TypeLeadershipChairSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:11:57.046Z
 * @version 11
 */
export type TypeLeadershipChairSkeleton = EntrySkeletonType<TypeLeadershipChairFields, "leadershipChair">;
/**
 * Entry type definition for content type 'leadershipChair' (Leadership Chair)
 * @name TypeLeadershipChair
 * @type {TypeLeadershipChair}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:11:57.046Z
 * @version 11
 */
export type TypeLeadershipChair<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLeadershipChairSkeleton, Modifiers, Locales>;
