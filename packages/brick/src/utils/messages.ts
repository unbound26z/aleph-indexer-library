import { messages } from 'aleph-sdk-ts'
import { ItemType } from 'aleph-sdk-ts/dist/messages/message'
import { Publish as publishAggregate } from 'aleph-sdk-ts/dist/messages/aggregate'

export async function publish(key: string, content: any) {
    await publishAggregate({
        account: account,
        key: key,
        content: content,
        channel: "brick",
        storageEngine: ItemType.inline,
        inlineRequested: true,
        APIServer: "https://api2.aleph.im"
    })
}