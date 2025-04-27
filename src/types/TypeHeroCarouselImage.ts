import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeHeroCarouselImage'
 * @name TypeHeroCarouselImageFields
 * @type {TypeHeroCarouselImageFields}
 * @memberof TypeHeroCarouselImage
 */
export interface TypeHeroCarouselImageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'alt' (Alt)
     * @name Alt
     * @localized false
     * @summary Alternative text for accessibility
     */
    alt?: EntryFieldTypes.Symbol;
}

/**
 * Entry skeleton type definition for content type 'heroCarouselImage' (Hero Carousel Image)
 * @name TypeHeroCarouselImageSkeleton
 * @type {TypeHeroCarouselImageSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T06:47:30.881Z
 * @version 1
 */
export type TypeHeroCarouselImageSkeleton = EntrySkeletonType<TypeHeroCarouselImageFields, "heroCarouselImage">;
/**
 * Entry type definition for content type 'heroCarouselImage' (Hero Carousel Image)
 * @name TypeHeroCarouselImage
 * @type {TypeHeroCarouselImage}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-22T06:47:30.881Z
 * @version 1
 */
export type TypeHeroCarouselImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroCarouselImageSkeleton, Modifiers, Locales>;
