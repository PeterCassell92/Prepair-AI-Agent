# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prepair is an AI-powered inventory management and procurement system for tradespeople. The system analyzes jobs and inventory to identify material gaps, then uses AI agents to autonomously source and procure missing items from local suppliers.

## Repository Structure

The project is organized into two main components:

- **presentation/** - React/Vite frontend that visualizes the Prepair workflow and solution
- **agent/** - Planned AI agent implementation (not yet developed) that will integrate:
  - LiveKit for voice agent interactions
  - MCP (Model Context Protocol) tools for LiveKit integration
  - Valyu search for supplier discovery
  - ElevenLabs for autonomous phone calling

## Development Commands

### Presentation (Frontend)

Navigate to the `presentation/` directory for all frontend commands:

```bash
cd presentation
npm run dev      # Start development server with hot reload
npm run build    # Build for production (runs TypeScript check + Vite build)
npm run preview  # Preview production build locally
```

### Agent (Backend)

The agent component is currently a placeholder and has no build/run commands yet.

## Technology Stack

### Presentation
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with PostCSS
- **Type Checking**: TypeScript 5.5

## Codebase Architecture

### Presentation Component

The presentation is a single-page React application (`App.tsx`) that visualizes the Prepair workflow as a flowchart diagram. Key architectural details:

- **Monolithic Component**: The entire workflow visualization is contained in a single `App.tsx` component
- **Color System**: Brand colors are documented in `colours.md` and used inline via style props:
  - `#48c8ef` - Light blue (primary actions, gap analysis)
  - `#2d7d95` - Shade blue (headings)
  - `#ffcb5a` - Soft yellow (decisions)
  - `#37c94f` - Success green (ready state)
  - `#77959e` - Light gray (labels)
- **Assets**: Logo images stored in `presentation/logos/` for Prepair, ElevenLabs, LiveKit, and Valyu
- **Layout**: Flexbox-based responsive workflow diagram with decision branching

### Planned Agent Architecture

Based on `agent/Agent.md`, the agent component will implement:

1. **Voice Interface**: LiveKit-based conversational agent to understand user requirements
2. **Supplier Discovery**: Valyu search integration to find local suppliers near job sites
3. **Autonomous Procurement**: ElevenLabs agent to make phone calls, check availability, and book collection
4. **MCP Integration**: Model Context Protocol tools to connect LiveKit with backend services

## Working with the Presentation

The presentation uses a non-standard project structure where `App.tsx` exists at the root of `presentation/` rather than in `src/`. The Tailwind config accounts for this with content paths including `"./*.{js,ts,jsx,tsx}"`.

When modifying the workflow visualization:
- Color changes should reference `colours.md` for brand consistency
- The layout uses a two-column grid for the decision fork (YES/NO paths)
- SVG paths are used for connecting arrows between workflow nodes
