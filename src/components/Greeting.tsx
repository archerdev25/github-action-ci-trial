

interface GreetingProps {
    name?: string;
}

export default function Greeting({ name }: GreetingProps) {
    return (
        <div>
            <h1>Hello, {name ?? 'Guest'}!</h1>
        </div>
    );
}
