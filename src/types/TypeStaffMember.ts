import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeStaffMember'
 * @name TypeStaffMemberFields
 * @type {TypeStaffMemberFields}
 * @memberof TypeStaffMember
 */
export interface TypeStaffMemberFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'role' (Role)
     * @name Role
     * @localized false
     */
    role: EntryFieldTypes.Symbol;
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
 * Entry skeleton type definition for content type 'staffMember' (Staff Member)
 * @name TypeStaffMemberSkeleton
 * @type {TypeStaffMemberSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:24:00.386Z
 * @version 11
 */
export type TypeStaffMemberSkeleton = EntrySkeletonType<TypeStaffMemberFields, "staffMember">;
/**
 * Entry type definition for content type 'staffMember' (Staff Member)
 * @name TypeStaffMember
 * @type {TypeStaffMember}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T03:24:00.386Z
 * @version 11
 */
export type TypeStaffMember<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeStaffMemberSkeleton, Modifiers, Locales>;
