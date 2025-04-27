import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeBoardMember'
 * @name TypeBoardMemberFields
 * @type {TypeBoardMemberFields}
 * @memberof TypeBoardMember
 */
export interface TypeBoardMemberFields {
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
     * Field type definition for field 'district' (District)
     * @name District
     * @localized false
     */
    district: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'club' (Club)
     * @name Club
     * @localized false
     */
    club: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'boardMember' (Board Member)
 * @name TypeBoardMemberSkeleton
 * @type {TypeBoardMemberSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:14:07.547Z
 * @version 3
 */
export type TypeBoardMemberSkeleton = EntrySkeletonType<TypeBoardMemberFields, "boardMember">;
/**
 * Entry type definition for content type 'boardMember' (Board Member)
 * @name TypeBoardMember
 * @type {TypeBoardMember}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:14:07.547Z
 * @version 3
 */
export type TypeBoardMember<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBoardMemberSkeleton, Modifiers, Locales>;
