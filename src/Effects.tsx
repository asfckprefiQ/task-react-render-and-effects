import { useEffect, useState } from 'react';
import { subscribe, unsubscribe } from './resources/API';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState<number>(-1);

    useEffect(() => {
        setLastMessage(-1);

        function handleMessage(message: number) {
            setLastMessage(message);
        }

        subscribe(props.sourceId, handleMessage);

        return () => {
            unsubscribe(props.sourceId, handleMessage);
        };
    }, [props.sourceId]);

    return <div>{`${props.sourceId}: ${lastMessage}`}</div>;
}