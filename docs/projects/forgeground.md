# Forgeground

> **Browser-Based 3D Arena Shooter with Physics Manipulation**

## The Problem

High-quality multiplayer shooters require:
- Large downloads (50-100GB+)
- Expensive gaming hardware
- Platform lock-in (console wars)
- Always-online DRM

This excludes billions of potential players and keeps gaming trapped in walled gardens.

## The Solution

Forgeground is a **browser-native** 3D arena shooter. No downloads, no installs - just open a URL and play. Built on Babylon.js with WebGL, it delivers 60fps action directly in your browser while pushing the boundaries of what's possible on the web.

## Key Features

| Feature | Description |
|---------|-------------|
| **Zero Download** | Play instantly in any modern browser |
| **60Hz Physics** | Server-authoritative with client prediction |
| **Multiplayer** | Real-time WebSocket networking (8 players/room) |
| **Physics Weapons** | Gravity, time, inertia, entropy manipulation |
| **AI Opponents** | State-machine AI for singleplayer practice |
| **Cross-Platform** | PC, Mac, Linux, even mobile (with controls) |

## Weapon System

### Standard Weapons
- Rifle, Shotgun, Sniper, Bow, SMG

### Physics Weapons (Unique)

| Weapon | Physics Field | Effect |
|--------|--------------|--------|
| **Graviton Lance** | Gravity | Projectiles create gravity wells |
| **Temporal Repeater** | Time | Slows/speeds time in area |
| **Inertia Hammer** | Momentum | Transfers momentum on hit |
| **Entropy Bow** | Decay | Damage over time fields |
| **Spatial Shotgun** | Space | Compression/expansion pellets |
| **Mass Driver** | Mass | Increases target mass |

## Technical Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                       FORGEGROUND                            │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   GAME CLIENT                        │    │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────┐       │    │
│  │  │ Babylon.js│  │  Physics  │  │   Input   │       │    │
│  │  │ Renderer  │  │ Prediction│  │  Handler  │       │    │
│  │  └───────────┘  └───────────┘  └───────────┘       │    │
│  └────────────────────────┬────────────────────────────┘    │
│                           │ WebSocket                        │
│                           ▼                                  │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   GAME SERVER                        │    │
│  │  ┌───────────┐  ┌───────────┐  ┌───────────┐       │    │
│  │  │   Room    │  │  Physics  │  │   State   │       │    │
│  │  │  Manager  │  │ Authority │  │ Broadcast │       │    │
│  │  └───────────┘  └───────────┘  └───────────┘       │    │
│  │                                                     │    │
│  │  Tick: 60Hz (sim) / 20Hz (broadcast)               │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Network Protocol

### Client → Server
| Message | Rate | Description |
|---------|------|-------------|
| `INPUT` | 60Hz | Player input (movement, aim, fire) |
| `JOIN_MATCH` | Once | Request to join |
| `LEAVE_MATCH` | Once | Leave current match |
| `PING` | 1Hz | Latency measurement |

### Server → Client
| Message | Rate | Description |
|---------|------|-------------|
| `STATE_UPDATE` | 20Hz | Full game state |
| `PLAYER_JOINED` | Event | New player notification |
| `PLAYER_LEFT` | Event | Player disconnect |
| `PONG` | Response | Latency response |

## Technology Stack

| Component | Technology |
|-----------|------------|
| Engine | Babylon.js 6.x |
| Language | TypeScript |
| Server | Node.js + ws |
| Physics | Custom deterministic (60Hz fixed timestep) |
| Rendering | WebGL 2.0 |
| Audio | Web Audio API |

## Repository Structure

```
forgeground/
├── Forgeground/
│   └── forgeground/           # Game client
│       ├── src/
│       │   ├── Game.ts        # Main game loop
│       │   ├── Player.ts      # Player entity
│       │   ├── Weapon.ts      # Weapon system
│       │   ├── Physics.ts     # Physics fields
│       │   └── Network.ts     # WebSocket client
│       └── package.json
└── forgeground-server/        # Game server
    ├── src/
    │   ├── index.ts           # Entry point
    │   ├── GameServer.ts      # WebSocket server
    │   ├── Room.ts            # Match room
    │   └── ServerPlayer.ts    # Server player
    └── package.json
```

## Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 3000 | Server WebSocket port |
| `MAX_ROOMS` | 10 | Maximum concurrent matches |
| `TICK_RATE` | 60 | Physics simulation rate |
| `BROADCAST_RATE` | 20 | State update rate |

## Why Browser-Native Matters

| Traditional | Forgeground |
|-------------|-------------|
| 50GB download | 0 download |
| 1 platform | Every platform |
| Store approval | Instant deploy |
| Update downloads | Instant updates |
| Hardware DRM | Open web |

## Roadmap

- [x] Core game loop
- [x] Basic weapons
- [x] Multiplayer networking
- [x] AI opponents
- [ ] Physics weapons (6 types)
- [ ] Ranked matchmaking
- [ ] Tournament mode
- [ ] Mobile controls
- [ ] WebGPU renderer

## Metrics & Status

- **Status**: Beta development
- **Max Players**: 8 per room
- **Tick Rate**: 60Hz simulation, 20Hz broadcast
- **Weapons**: 5 standard + 6 physics (in progress)

## Links

- Play: [forgeground.online](https://forgeground.online)

---

## Why This Matters

Forgeground demonstrates that **the web is a gaming platform**. No walled gardens, no gatekeepers - just URLs. This is part of a broader vision where technology is accessible to everyone, not locked behind corporate ecosystems. High-quality gaming should be one click away for anyone with a browser.
