import { useEffect, useState } from "react";
import "./CountDown.css";

function CountDown() {
    const weddingDate = new Date("2026-05-30T16:00:00"); // Data do casamento

    // Estado para armazenar o tempo restante
    const [timeLeft, setTimeLeft] = useState({});
    const [isWeddingDay, setIsWeddingDay] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date(); // Data atual

            const remainingTime = weddingDate - now;

            // Se o casamento já passou
            if (remainingTime <= 0) {
                clearInterval(interval);
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                setIsWeddingDay(true);
                return;
            }

            // Cálculos de dias, horas, minutos, segundos
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
            const seconds = Math.floor((remainingTime / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000); // Atualiza a cada segundo

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar
    }, [weddingDate]);

    // Função para singular/plural
    const pluralize = (value, singular, plural) => {
        return value === 1 ? `${singular}` : `${plural}`;
    };

    return (
        <div className="interface">
            <div className="contador">
                {isWeddingDay ? (
                    <h1>Chegou o grande dia!!</h1>
                ) : (
                    <div className="contador-unidades">
                        <div className="unidade">
                            <span className="numero">{timeLeft.days}</span>
                            <span className="rotulo">{pluralize(timeLeft.days, "DIA", "DIAS")}</span>
                        </div>
                        <div className="unidade">
                            <span className="numero">{timeLeft.hours}</span>
                            <span className="rotulo">{pluralize(timeLeft.hours, "HORA", "HORAS")}</span>
                        </div>
                        <div className="unidade">
                            <span className="numero">{timeLeft.minutes}</span>
                            <span className="rotulo">{pluralize(timeLeft.minutes, "MINUTO", "MINUTOS")}</span>
                        </div>
                        <div className="unidade">
                            <span className="numero">{timeLeft.seconds}</span>
                            <span className="rotulo">{pluralize(timeLeft.seconds, "SEGUNDO", "SEGUNDOS")}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CountDown;
