import { Box, Card, CardBody, CardFooter, CardHeader, Text } from "grommet";
import { h } from "preact";
import { Word } from "../dictionary";
import { Statistics } from "../routes/quiz";

const Annotation = (props: any) => <Text color="gray">{props.children}</Text>;

interface WordCardProps {
    noun: Word;
    statistics: Statistics;
    explainWord?: boolean
}

export function WordCard(props: WordCardProps) {
    return <Box pad="large">
        <Card>
            <CardHeader pad={{top: "large", bottom: "medium", horizontal: "medium"}}>
                <Text size="xlarge">
                    {props.noun.sv} <Annotation>[sv]</Annotation>
                </Text>
            </CardHeader>
            <CardBody pad={{vertical: "medium", horizontal: "medium"}}>
                {props.explainWord && (
                    <Text size="medium" weight="lighter">
                        {props.noun.en} <Annotation>[en]</Annotation>
                    </Text>
                )}
            </CardBody>
            <CardFooter pad="medium" background="light-1" justify="end">
                <Text>Correct {props.statistics.correct} / {props.statistics.total}</Text>
            </CardFooter>
        </Card>
    </Box>;
}