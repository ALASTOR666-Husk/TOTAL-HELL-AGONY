flowchart TD
    %% Стилизация
    classDef startend fill:#90EE90,stroke:#333,stroke-width:2px;
    classDef task fill:#E1F5FE,stroke:#0277BD,stroke-width:2px;
    classDef gateway fill:#FFF9C4,stroke:#FBC02D,stroke-width:2px,rx:50%;
    classDef admin fill:#F3E5F5,stroke:#7B1FA2,stroke-width:2px;
    classDef timer stroke:#FF5722,stroke-dasharray: 5 5;

    subgraph Pool_CoffeeShop [Процесс обслуживания в кофейне]
        direction TB
        
        subgraph Lane_Visitor [Посетитель]
            Start((Начало)):::startend
            T_Choose[Выбрать напиток/десерт]:::task
            T_Order[Сообщить заказ]:::task
            T_Pay[Оплатить заказ]:::task
            T_DecideSub[Решить: согласен на замену?]:::task
            T_Receive[Получить напиток и чек]:::task
            T_ComplainCheck{Жалоба на качество?}:::gateway
            End_Success((Ушел довольным)):::startend
        end

        subgraph Lane_Barista [Бариста]
            T_Register[Регистрация в POS]:::task
            T_Announce[Назвать сумму и время]:::task
            T_CheckIng[Проверить ингредиенты]:::task
            G_IngCheck{Есть в наличии?}:::gateway
            T_OfferSub[Предложить замену]:::task
            T_ChangeRecipe[Изменить рецепт]:::task
            T_Prepare[Приготовить напиток<br/>*(Параллельно)*]:::task
            T_HandOver[Передать напиток]:::task
            T_Cancel[Отмена и возврат денег]:::task
            End_Cancel((Заказ отменен)):::startend
            T_MakeNew[Приготовить замену бесплатно]:::task
        end

        subgraph Lane_Admin [Администратор]
            T_Bonus[Выдать бонус за ожидание]:::admin
            T_Resolve[Рассмотреть жалобу]:::admin
            G_ResolveDecision{Решение}:::gateway
            T_RefundQuality[Возврат денег]:::admin
            End_Refund((Возврат выполнен)):::startend
        end
    end

    %% Связи
    Start --> T_Choose --> T_Order --> T_Register --> T_Announce --> T_Pay
    T_Pay --> T_CheckIng --> G_IngCheck
    
    %% Ветвление ингредиентов
    G_IngCheck -- Да --> T_Prepare
    G_IngCheck -- Нет --> T_OfferSub --> T_DecideSub
    T_DecideSub -- Да --> T_ChangeRecipe --> T_Prepare
    T_DecideSub -- Нет --> T_Cancel --> End_Cancel

    %% Таймер и бонус
    T_Prepare -.->|Таймер > 5 мин| T_Bonus
    T_Bonus --> End_Success_Bonus((Бонус выдан)):::startend

    %% Выдача и качество
    T_Prepare --> T_HandOver --> T_Receive --> T_ComplainCheck
    
    T_ComplainCheck -- Нет --> End_Success
    T_ComplainCheck -- Да --> T_Resolve --> G_ResolveDecision
    
    G_ResolveDecision -- Замена --> T_MakeNew --> T_HandOver
    G_ResolveDecision -- Возврат --> T_RefundQuality --> End_Refund

    %% Стилизация таймера
    linkStyle 14 stroke:#FF5722,stroke-width:2px,stroke-dasharray: 5 5;
