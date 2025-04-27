import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRepresentatives'
 * @name TypeRepresentativesFields
 * @type {TypeRepresentativesFields}
 * @memberof TypeRepresentatives
 */
export interface TypeRepresentativesFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'club' (Club)
     * @name Club
     * @localized false
     */
    club: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'year' (Year)
     * @name Year
     * @localized false
     * @summary RY YYYY-YYYY
     */
    year: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'representatives' (Representatives)
 * @name TypeRepresentativesSkeleton
 * @type {TypeRepresentativesSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T16:23:09.877Z
 * @version 7
 */
export type TypeRepresentativesSkeleton = EntrySkeletonType<TypeRepresentativesFields, "representatives">;
/**
 * Entry type definition for content type 'representatives' (Representatives)
 * @name TypeRepresentatives
 * @type {TypeRepresentatives}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T16:23:09.877Z
 * @version 7
 */
export type TypeRepresentatives<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRepresentativesSkeleton, Modifiers, Locales>;
