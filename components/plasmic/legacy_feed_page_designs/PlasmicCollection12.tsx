// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: dMaiZmvKdpJ4pWYeCQn3zc
// Component: KcwykrmdlpuBPX

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: dMaiZmvKdpJ4pWYeCQn3zc/projectcss
import sty from "./PlasmicCollection12.module.css"; // plasmic-import: KcwykrmdlpuBPX/css

createPlasmicElementProxy;

export type PlasmicCollection12__VariantMembers = {};
export type PlasmicCollection12__VariantsArgs = {};
type VariantPropType = keyof PlasmicCollection12__VariantsArgs;
export const PlasmicCollection12__VariantProps = new Array<VariantPropType>();

export type PlasmicCollection12__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot9?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCollection12__ArgsType;
export const PlasmicCollection12__ArgProps = new Array<ArgPropType>(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot9"
);

export type PlasmicCollection12__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultCollection12Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  slot2?: React.ReactNode;
  slot3?: React.ReactNode;
  slot9?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCollection12__RenderFunc(props: {
  variants: PlasmicCollection12__VariantsArgs;
  args: PlasmicCollection12__ArgsType;
  overrides: PlasmicCollection12__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox___0FbXw)}>
        {renderPlasmicSlot({
          defaultContents: (
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img___9UkuV)}
              displayHeight={"441px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"387px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/legacy_feed_page_designs/images/productVariety1C2E7Bd9Ac9C4989Bfad811526Dad7E0250X2502Xjpgpng.png",
                fullWidth: 387,
                fullHeight: 442,
                aspectRatio: undefined
              }}
            />
          ),

          value: args.children
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__rfkHi)}>
        {renderPlasmicSlot({
          defaultContents: "VITAMIN AIR 3-PACK",
          value: args.slot,
          className: classNames(sty.slotTargetSlot)
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__oAnec)}>
        {renderPlasmicSlot({
          defaultContents: "\u2605\u2605\u2605\u2605\u2605 (447)",
          value: args.slot2,
          className: classNames(sty.slotTargetSlot2)
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___5WGi6)}>
        {renderPlasmicSlot({
          defaultContents: "$98 + FREE SHIPPING",
          value: args.slot9,
          className: classNames(sty.slotTargetSlot9)
        })}
      </div>
      <div className={classNames(projectcss.all, sty.freeBox___95Jj7)}>
        {renderPlasmicSlot({
          defaultContents: "(One of each formulation)",
          value: args.slot3,
          className: classNames(sty.slotTargetSlot3)
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCollection12__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCollection12__VariantsArgs;
    args?: PlasmicCollection12__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCollection12__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCollection12__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCollection12__ArgProps,
          internalVariantPropNames: PlasmicCollection12__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCollection12__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCollection12";
  } else {
    func.displayName = `PlasmicCollection12.${nodeName}`;
  }
  return func;
}

export const PlasmicCollection12 = Object.assign(
  // Top-level PlasmicCollection12 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCollection12
    internalVariantProps: PlasmicCollection12__VariantProps,
    internalArgProps: PlasmicCollection12__ArgProps
  }
);

export default PlasmicCollection12;
/* prettier-ignore-end */
