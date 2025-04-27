import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeExecutiveCommitteeMember'
 * @name TypeExecutiveCommitteeMemberFields
 * @type {TypeExecutiveCommitteeMemberFields}
 * @memberof TypeExecutiveCommitteeMember
 */
export interface TypeExecutiveCommitteeMemberFields {
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
 * Entry skeleton type definition for content type 'executiveCommitteeMember' (Executive Committee Member)
 * @name TypeExecutiveCommitteeMemberSkeleton
 * @type {TypeExecutiveCommitteeMemberSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:23:19.127Z
 * @version 3
 */
export type TypeExecutiveCommitteeMemberSkeleton = EntrySkeletonType<TypeExecutiveCommitteeMemberFields, "executiveCommitteeMember">;
/**
 * Entry type definition for content type 'executiveCommitteeMember' (Executive Committee Member)
 * @name TypeExecutiveCommitteeMember
 * @type {TypeExecutiveCommitteeMember}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:23:19.127Z
 * @version 3
 */
export type TypeExecutiveCommitteeMember<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeExecutiveCommitteeMemberSkeleton, Modifiers, Locales>;
