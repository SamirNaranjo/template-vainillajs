import usersStore from "../../store/users-store";
import { RenderTable } from "../render-table/render-table";
import './render-buttons.css'


export const renderButtons = (element) => {


    const nextButton = document.createElement('button');
    nextButton.innerText = ' Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Prev ';

    const currentPageLabel = document.createElement('span');
    currentPageLabel.id = 'current-page';
    currentPageLabel.innerText = usersStore.getCurrentPage();

    element.append( prevButton, currentPageLabel, currentPageLabel, nextButton, nextButton);

    nextButton.addEventListener('click', async() => {

        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        RenderTable (element);

    });

    prevButton.addEventListener('click', async() => {

        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPage();
        RenderTable (element);


    });
}