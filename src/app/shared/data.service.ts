import { Injectable } from "@angular/core";

export interface IDataItem {
    id: number;
    name: string;
    image: string;
    description: string;
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<IDataItem>(
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        },
        {
            id: 0,
            name: "Nome do produto",
            image: "https://loremflickr.com/600/600/pants",
            description: "Descrição de exemplo do item de exemplo, limite de 65 caracteres."
        }
    );

    getItems(): Array<IDataItem> {
        return this.items;
    }

    getItem(id: number): IDataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
