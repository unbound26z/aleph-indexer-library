import { ViewInstructions } from './types.js'

export function renderParsersFiles(
  instructions: ViewInstructions | undefined,
  Name: string,
): string[] {
  let event = `import { SolanaParsedInstructionContext, RawMessageAccount } from '@aleph-indexer/solana'
import {
  ${Name}Event,
  RawInstruction,
  RawInstructionsInfo
} from '../utils/layouts/index.js'

export class EventParser {
  parse(ixCtx: SolanaParsedInstructionContext, account: string): ${Name}Event {
    const { instruction, parentInstruction, parentTransaction } = ixCtx
    const parsed = (instruction as RawInstruction).parsed

    const id = \`\${parentTransaction.signature}\${
      parentInstruction ? \` :\${parentInstruction.index.toString().padStart(2, '0')}\` : ''
    }:\${instruction.index.toString().padStart(2, '0')}\` 

    const timestamp = parentTransaction.blockTime
      ? parentTransaction.blockTime * 1000
      : parentTransaction.slot

    const signer = parentTransaction.parsed.message.accountKeys.find((acc: RawMessageAccount) => acc.signer)?.pubkey
    
    return {
      id,
      timestamp,
      type: parsed.type,
      signer: signer,
      info: parsed.info as RawInstructionsInfo,
      account: account,
    } as ${Name}Event
  }
}

export const eventParser = new EventParser()
export default eventParser
`
  const eventTest = `import {jest} from "@jest/globals";

jest.setTimeout(10000)

import { EventParser } from "../event.js";
import { InstructionContextV1 } from "@aleph-indexer/core"


// test correct event parsing
describe('EventParser', () => {
  it('parses the first event in the IDL from InstructionContext', () => {
    const instruction = {
      index: 0,
      parsed: {
        type: "${instructions?.instructions[0].name}Event",
        info: {
          programId: "programId",
        }
      },
      programId: "programId",
      signer: '2gCzKgSTPSy4fL7z9NQhJAKvumEofTa2DFJU4wGhQ5Jt',
      innerInstructions: [],
      data: "data",
      accounts: [],
    }
    const accountKeys = [
      {
        pubkey: '2gCzKgSTPSy4fL7z9NQhJAKvumEofTa2DFJU4wGhQ5Jt',
        signer: true,
        writable: true,
      },
    ]
    const instructionContext: InstructionContextV1 = {
      ix: instruction,
      parentIx: undefined,
      txContext: {
        tx: {
          signature: "signature",
          blocktime: 0,
          slot: 0,
          index: 0,
          meta: {
            err: null,
            fee: 0,
            innerInstructions: [],
            preBalances: [],
            postBalances: [],
          },
          parsed: {
            error: undefined,
            message: {
              instructions: [instruction],
              accountKeys: accountKeys,
              recentBlockhash: "recentBlockhash",
            },
            signatures: [],
          }
        },
        parserContext: {
          account: "account",
          startDate: 0,
          endDate: 0,
        }
      }
    }
    const eventParser = new EventParser()
    const parsedEvent = eventParser.parse(instructionContext)
    console.log(parsedEvent)
    expect(parsedEvent).toEqual({
      id: "signature:00",
      timestamp: 0,
      type: "${instructions?.instructions[0].name}Event",
      account: "account",
      programId: "programId",
      signer: '2gCzKgSTPSy4fL7z9NQhJAKvumEofTa2DFJU4wGhQ5Jt',
    })
  })
})`

  return [event, eventTest]
}
