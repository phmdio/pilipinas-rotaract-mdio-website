import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeRotaractChartConfig'
 * @name TypeRotaractChartConfigFields
 * @type {TypeRotaractChartConfigFields}
 * @memberof TypeRotaractChartConfig
 */
export interface TypeRotaractChartConfigFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'dataKey' (Data key)
     * @name Data key
     * @localized false
     */
    dataKey?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'colors' (Colors)
     * @name Colors
     * @localized false
     */
    colors?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'dataSource' (Data source)
     * @name Data source
     * @localized false
     */
    dataSource?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'xAxisKey' (X Axis key)
     * @name X Axis key
     * @localized false
     */
    xAxisKey?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'asOfDate' (As of date)
     * @name As of date
     * @localized false
     */
    asOfDate?: EntryFieldTypes.Date;
}

/**
 * Entry skeleton type definition for content type 'rotaractChartConfig' (Rotaract Chart Config)
 * @name TypeRotaractChartConfigSkeleton
 * @type {TypeRotaractChartConfigSkeleton}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T02:30:47.897Z
 * @version 5
 */
export type TypeRotaractChartConfigSkeleton = EntrySkeletonType<TypeRotaractChartConfigFields, "rotaractChartConfig">;
/**
 * Entry type definition for content type 'rotaractChartConfig' (Rotaract Chart Config)
 * @name TypeRotaractChartConfig
 * @type {TypeRotaractChartConfig}
 * @author 7JiRJp09BoeEJKAfADvMTf
 * @since 2025-04-23T02:30:47.897Z
 * @version 5
 */
export type TypeRotaractChartConfig<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeRotaractChartConfigSkeleton, Modifiers, Locales>;
