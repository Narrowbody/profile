import { openModal } from 'free-astro-components';

const assessPill = document.querySelector('#asses');
const advisePill = document.querySelector('#advise');
const implementPill = document.querySelector('#implement');
const trainPill = document.querySelector('#train');

const modal = document.querySelector('#modal-id');
const adviseModal = document.querySelector('#modal-id2');
const implementModal = document.querySelector('#modal-id3');
const trainModal = document.querySelector('#modal-id4');

assessPill.addEventListener('click', (event) => {
	event.preventDefault();
	openModal(modal);
});

advisePill.addEventListener('click', (event) => {
	event.preventDefault();
	openModal(adviseModal);
});

implementPill.addEventListener('click', (event) => {
	event.preventDefault();
	openModal(implementModal);
});

trainPill.addEventListener('click', (event) => {
	event.preventDefault();
	openModal(trainModal);
});
