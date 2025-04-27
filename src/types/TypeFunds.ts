import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeFunds'
 * @name TypeFundsFields
 * @type {TypeFundsFields}
 * @memberof TypeFunds
 */
export interface TypeFundsFields {
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
     * Field type definition for field 'alt' (Alt)
     * @name Alt
     * @localized false
     */
    alt?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'funds' (Funds)
 * @name TypeFundsSkeleton
 * @type {TypeFundsSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-26T03:59:35.391Z
 * @version 1
 */
export type TypeFundsSkeleton = EntrySkeletonType<TypeFundsFields, "funds">;
/**
 * Entry type definition for content type 'funds' (Funds)
 * @name TypeFunds
 * @type {TypeFunds}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-26T03:59:35.391Z
 * @version 1
 */
export type TypeFunds<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFundsSkeleton, Modifiers, Locales>;
