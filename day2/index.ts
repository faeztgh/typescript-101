/********************************  Omit & Pick ********************************/

interface Person {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
}

const newPerson: Omit<Person, "id" | "createdAt"> = {
    name: "Jane",
    email: "jane@test.com",
};

const newPerson3: Pick<Person, "name" | "email"> = {
    name: "Jane",
    email: "jane@test.com",
};
