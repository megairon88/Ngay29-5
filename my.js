let year = prompt ('nam cam xem')

    if (year % 100 == 0)
        
    {
        if (year % 400 == 0){
            cout << year << " la nam nhuan";
        }
        else{
            cout << year << " khong phai la nam nhuan";
        }
    }
    else if (year % 4 == 0) {
        cout << year << " la nam nhuan";
    }
    else{
        cout << year << " khong phai la nam nhuan";
    }
