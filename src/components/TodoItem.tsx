type Props = {
    title: string;
};

export const TodoItem = ({ title }: Props) => {
    return <li>{title}</li>;
};
