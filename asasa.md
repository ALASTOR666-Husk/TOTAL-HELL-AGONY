flowchart TD
  classDef startEnd fill:#90EE90,stroke:#333,stroke-width:2px;
  classDef task fill:#FFE4B5,stroke:#333,stroke-width:2px;
  classDef gateway fill:#FFD700,stroke:#333,stroke-width:2px,rx:50%;
  classDef admin fill:#ADD8E6,stroke:#333,stroke-width:2px;

  Start((🟢 Начало)):::startEnd
  T1[Выбрать напиток/десерт]:::task
  T2[Сообщить заказ бариста]:::task
  T3[Оплатить заказ]:::task
  
  B1[Зарегистрировать заказ в POS]:::task
  B2[Назвать сумму]:::task
  G1{Способ оплаты?}:::gateway
  B3a[Принять наличные, выдать сдачу]:::task
  B3b[Провести оплату через терминал]:::task
  B4[Проверить наличие ингредиентов]:::task
  G2{Ингредиенты есть?}:::gateway
  B5[Предложить замену]:::task
  G3{Согласен на замену?}:::gateway
  B6[Изменить рецепт в POS]:::task
  B7[Приготовить напиток<br><i>[Множественный экземпляр]</i>]:::task
  B8[Передать напиток и чек]:::task
  B9[Отменить заказ / Вернуть деньги]:::task
  EndCancel((🔴 Заказ отменён)):::startEnd

  A1[🔹 Активировать бонус за ожидание]:::admin
  A2[🔹 Рассмотреть жалобу]:::admin
  A3[🔹 Принять решение: замена или возврат]:::admin
  EndResolved((🔵 Спор разрешён)):::startEnd

  T4[Получить напиток и чек]:::task
  T5[Оценить качество до первого глотка]:::task
  G4{Жалоба на качество?}:::gateway
  EndDone((🟢 Посетитель уходит)):::startEnd

  Start --> T1 --> T2 --> B1 --> B2 --> T3
  T3 --> G1
  G1 -->|Наличные| B3a --> B4
  G1 -->|Карта| B3b --> B4
  B4 --> G2
  G2 -->|Да| B7
  G2 -->|Нет| B5 --> G3
  G3 -->|Да| B6 --> B7
  G3 -->|Нет| B9 --> EndCancel
  B7 -.->|⏱ Таймер >5 мин| A1
  B7 --> B8 --> T4 --> T5 --> G4
  G4 -->|Да| A2 --> A3 --> EndResolved
  G4 -->|Нет| EndDone
