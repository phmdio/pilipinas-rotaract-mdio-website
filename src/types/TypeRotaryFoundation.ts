import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFundsSkeleton } from "./TypeFunds";

/**
 * Fields type definition for content type 'TypeRotaryFoundation'
 * @name TypeRotaryFoundationFields
 * @type {TypeRotaryFoundationFields}
 * @memberof TypeRotaryFoundation
 */
export interface TypeRotaryFoundationFields {
    /**
     * Field type definition for field 'introductionTitle' (Introduction Title)
     * @name Introduction Title
     * @localized false
     */
    introductionTitle: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'introductionContent' (Introduction Content)
     * @name Introduction Content
     * @localized false
     */
    introductionContent: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'funds' (Funds)
     * @name Funds
     * @localized false
     */
    funds?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFundsSkeleton>>;
    /**
     * Field type definition for field 'donationLink' (Donation Link)
     * @name Donation Link
     * @localized false
     */
    donationLink: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'rotaryFoundation' (Rotary Foundation)
 * @name TypeRotaryFoundationSkeleton
 * @type {TypeRotaryFoundationSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-26T04:03:37.787Z
 * @version 5
 */
export type TypeRotaryFoundationSkeleton = EntrySkeletonType<TypeRotaryFoundationFields, "rotaryFoundation">;
/**
 * Entry type definition for content type 'rotaryFoundation' (Rotary Foundation)
 * @name TypeRotaryFoundation
 * @type {TypeRotaryFoundation}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-26T04:03:37.787Z
 * @version 5
 */
export type TypeRotaryFoundation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRotaryFoundationSkeleton, Modifiers, Locales>;
