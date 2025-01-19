"use client";

import React, { useState } from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

import {
  Heading,
  Text,
  Button,
  Icon,
SmartLink,

  Line,

  Background,


  Card,
  Fade,


  TiltFx,
  HoloFx,
  IconButton,

  Column,
  Row,
  StyleOverlay,
} from "@/once-ui/components";


export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");




  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/RowComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];





  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "4",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
     <MdOutlineCastForEducation />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >

          <Row gap="12" hide="s">

            <Button
              href="https://github.com/once-ui-system/nextjs-starter"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">

            <IconButton
              href="https://github.com/once-ui-system/nextjs-starter"
              icon="github"
              variant="tertiary"
            />
            <StyleOverlay top="20" right="24" />
          </Row>
        </Row>
      </Row>

      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column fillWidth horizontal="center" gap="32" padding="32" position="relative">

            <Heading wrap="balance" variant="display-default-l" align="center" marginBottom="16">
              My name is Robert Stewart and I am a software engineer.
              
            </Heading>

            <Column horizontal="center" paddingTop="64" fillWidth gap="24">
              <Line maxWidth={4} marginBottom="16" background="neutral-alpha-medium" />

              <Row fillWidth gap="24" horizontal="center">
              </Row>


            </Column>
          </Column>
          <Column fillWidth paddingX="32" gap="12" horizontal="center" position="relative">
            <Heading as="h2" variant="display-default-m">
              Showcase
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Tiny snippets to inspire your next project

            </Text>

            {/* LOGIN */}
            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
            >

              <Column fillWidth horizontal="center" gap="20" padding="32" position="relative">
                <Background
                  mask={{
                    x: 100,
                    y: 0,
                    radius: 75,
                  }}
                  position="absolute"
                  grid={{
                    display: true,
                    opacity: 50,
                    width: "0.5rem",
                    color: "neutral-alpha-medium",
                    height: "1rem",
                  }}
                />

                <Heading as="h3" variant="display-default-s">
                  ssssss
                </Heading>

                <Column fillWidth gap="8">


                </Column>
                <Row fillWidth paddingY="24">
                  <Row onBackground="neutral-weak" fillWidth gap="24" vertical="center">
                    <Line />/<Line />
                  </Row>
                </Row>
                <Column gap="-1" fillWidth>


                </Column>

              </Column>
            </Row>
          </Column>
        </Column>

        {/* PAYMENT */}
        <Row
          paddingX="32"
          fillWidth
          paddingY="160"
          gap="64"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Background
            style={{ left: "-1px" }}
            borderTop="neutral-alpha-medium"
            mask={{
              x: 0,
              y: 50,
              radius: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              opacity: 100,
              width: "10%",
              color: "neutral-alpha-medium",
              height: "1.25%",
            }}
          />
          <Row
            position="relative"
            shadow="xl"
            fillWidth
            border="neutral-alpha-medium"
            borderStyle="dashed"
            background="page"
            radius="xl"
          >
            <TiltFx
              aspectRatio="16 / 9"
              fillWidth
              radius="xl"
              border="accent-alpha-weak"
              overflow="hidden"
            >
              <HoloFx fill>
                <Background
                  fill
                  position="absolute"
                  gradient={{
                    display: true,
                    tilt: -45,
                    height: 150,
                    width: 100,
                    x: 75,
                    y: -50,
                    colorStart: "brand-solid-strong",
                    colorEnd: "accent-solid-weak",
                  }}
                >

                </Background>
              </HoloFx>
            </TiltFx>
          </Row>
          <Column position="relative" fillWidth gap="-1">
            <Row fillWidth vertical="center" horizontal="space-between" marginBottom="32">
              <Heading as="h3" variant="display-default-xs">
                I love your heading
              </Heading>

            </Row>

            <Row fillWidth gap="-1">

            </Row>
          </Column>
        </Row>

        {/* BOOKING */}
        <Row
          padding="32"
          fillWidth
          gap="64"
          position="relative"
          mobileDirection="column"
          vertical="center"
        >
          <Background
            fill
            position="absolute"
            gradient={{
              display: true,
              opacity: 60,
              tilt: 0,
              height: 100,
              width: 100,
              x: 50,
              y: 0,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column
            fillWidth
            background="surface"
            radius="xl"
            border="neutral-medium"
            overflow="hidden"
            padding="32"
            gap="40"
            position="relative"
          >
            <Row fillWidth horizontal="center" gap="-1">


            </Row>
            <Row fillWidth horizontal="center">

            </Row>
          </Column>
        </Row>

        {/* PROFILE */}
        <Row
          horizontal="center"
          paddingX="32"
          paddingY="64"
          fillWidth
          gap="32"
          position="relative"
        >
          <Background
            mask={{
              cursor: true,
            }}
            dots={{
              display: true,
              opacity: 50,
              color: "neutral-solid-strong",
              size: "48",
            }}
            fill
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: 0,
              height: 100,
              width: 200,
              x: 50,
              y: 0,
              colorStart: "neutral-background-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Column maxWidth={32} gap="-1">

            <Column
              background="page"
              radius={undefined}
              bottomRadius="l"
              overflow="hidden"
              position="relative"
              fillWidth
              horizontal="center"
              border="neutral-medium"
            >

              <Column
                paddingTop="160"
                paddingX="32"
                paddingBottom="32"
                fillWidth
                position="relative"
                horizontal="center"
                gap="8"
              >




                <Column paddingY="32" fillWidth gap="-1">

                </Column>




              </Column>
            </Column>
          </Column>
        </Row>

        {/* CODE PREVIEW */}
        <TiltFx fillWidth paddingX="32" paddingTop="64">
          <Column
            border="neutral-alpha-weak"
            paddingX="32"
            radius="xl"
            overflow="hidden"
            paddingY="160"
            fillWidth
            position="relative"
          >
            <Background
              mask={{
                x: 100,
                y: 0,
              }}
              position="absolute"
              grid={{
                display: true,
                color: "neutral-alpha-medium",
                width: "2rem",
                height: "2rem",
              }}
            />
            <Background
              mask={{
                x: 0,
                y: 100,
                radius: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                color: "brand-alpha-strong",
                width: "12",
                height: "12",
              }}
              gradient={{
                display: true,
                opacity: 100,
                height: 100,
                width: 100,
                tilt: 0,
                x: 0,
                y: 100,
                colorStart: "brand-solid-strong",
                colorEnd: "brand-background-medium",
              }}
            />
            <Column horizontal="center" gap="48" fillWidth position="relative">
              <Heading align="center" as="h2" variant="display-default-l">
                Heading
              </Heading>

            </Column>
          </Column>
        </TiltFx>

        <Row
          position="relative"
          fillWidth
          paddingX="32"
          paddingTop="160"
          minHeight={28}
          paddingBottom="80"
          horizontal="center"
          vertical="end"
        >
          <Background
            mask={{
              x: 50,
              y: 100,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Row position="relative" textVariant="display-default-m" align="center">
            Another heading
          </Row>
        </Row>
        <Row fillWidth overflow="hidden">
          <Row maxWidth="32" borderTop="neutral-alpha-weak" borderBottom="neutral-medium"></Row>
          <Row fillWidth border="neutral-alpha-weak" mobileDirection="column">
            {links.map((link, index) => (
              <SmartLink unstyled fillWidth target="_blank" key={link.href} href={link.href}>
                <Card
                  fillWidth
                  padding="40"
                  gap="8"
                  direction="column"
                  background={undefined}
                  borderRight={index < links.length - 1 ? "neutral-alpha-weak" : undefined}
                  border={undefined}
                  radius={undefined}
                >


                </Card>
              </SmartLink>
            ))}
          </Row>

        </Row>
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="128"
          paddingBottom="80"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >


            <SmartLink href="https://github.com/once-ui-system/nextjs-starter?tab=MIT-1-ov-file">
              Robert Stewart
            </SmartLink>
          </Column>
        </Row>
      </Column>



    </Column>
  );
}
