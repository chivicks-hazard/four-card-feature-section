import Card from './Card';
import Supervisor from '../assets/images/icon-supervisor.svg?react';
import TeamBuilder from '../assets/images/icon-team-builder.svg?react';
import Karma from '../assets/images/icon-karma.svg?react';
import Calculator from '../assets/images/icon-calculator.svg?react';

const Cards = () => {
    const cards = [
        {
            title: 'Supervisor',
            description: 'Monitors activity to identify project roadblocks',
            image: Supervisor
        },
        {
            title: 'Team Builder',
            description: 'Scans our talent network to create the optimal team for your project',
            image: TeamBuilder
        },
        {
            title: 'Karma',
            description: 'Regularly evaluates our talent to ensure quality',
            image: Karma
        },
        {
            title: 'Calculator',
            description: 'Uses data from past projects to provide better delivery estimates',
            image: Calculator
        }
    ];

    return (
        <div className="flex flex-col items-center md:flex-row md:justify-center md:space-x-6 mt-20 mx-5 pb-16 md:pb-10">
            <div className="mb-6 md:mb-0 md:mr-6">
                <Card index={0}>
                <div className={`border-t-4 rounded-lg border-t-cyan shadow-2xl w-72 p-6`}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="font-heavy text-xl">{cards[0].title}</h2>
                                <p className="font-light mt-2 text-grayishBlue">
                                    {cards[0].description}
                                </p>
                                <Supervisor className="float-end mt-4" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="flex flex-col space-y-6">
                <Card>
                    <div className={`border-t-4 rounded-lg border-t-red shadow-2xl w-72 p-6`}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="font-heavy text-xl">{cards[1].title}</h2>
                                <p className="font-light mt-2 text-grayishBlue">
                                    {cards[1].description}
                                </p>
                                <TeamBuilder className="float-end mt-4" />
                            </div>
                        </div>
                    </div>
                </Card>
                <Card index={2}>
                    <div className={`border-t-4 rounded-lg border-t-orange shadow-2xl w-72 p-6`}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="font-heavy text-xl">{cards[2].title}</h2>
                                <p className="font-light mt-2 text-grayishBlue">
                                    {cards[2].description}
                                </p>
                                <Karma className="float-end mt-4" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
                <Card index={3}>
                <div className={`border-t-4 rounded-lg border-t-blue shadow-2xl w-72 p-6`}>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="font-heavy text-xl">{cards[3].title}</h2>
                                <p className="font-light mt-2 text-grayishBlue">
                                    {cards[3].description}
                                </p>
                                <Calculator className="float-end mt-4" />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Cards;
