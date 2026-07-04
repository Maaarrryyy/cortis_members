
export interface CardProps {
    id: string;
    label: string;
    birth: string;
    img: string;
    imgAlt: string;
}

export interface GridProps {
    items: CardProps[];
}

export const data: GridProps = {
    items: [
        { 
            id: 'one',
            img: '../public/martin.jpg',
            imgAlt: 'Martin from Cortis',
            label: "MARTIN",
            birth: 'March 20. 2008'
        },
        { 
            id: 'two',
            img: '../public/james.jpg',
            imgAlt: 'JAMES',
            label: "JAMES",
            birth: 'October 14. 2005'
        },
        { 
            id: 'three',
            img: '../public/juhoon.jpg',
            imgAlt: 'JUHOON from Cortis',
            label: "JUHOON",
            birth: 'January 3. 2008'
        },
        { 
            id: 'four',
            img: '../public/seonghyeon.jpg',
            imgAlt: 'SEONGHYEON from Cortis',
            label: "SEONGHYEON",
            birth: 'January 13.2009'
        },
     
        { 
            id: 'six',
            img: '../public/keonho.jpg',
            imgAlt: 'KEONHO from Cortis',
            label: "KEONHO",
            birth: 'February 14. 2009'
        }
    ]
}